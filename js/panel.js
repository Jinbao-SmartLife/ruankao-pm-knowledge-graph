/**
 * Panel - 详情面板模块
 */
var Panel = (function() {
    var currentNode = null;
    var activeTab = 'overview';

    // KA颜色映射
    var kaColorMap = {
        '整合管理': '#8b5cf6', '范围管理': '#3b82f6', '进度管理': '#06b6d4',
        '成本管理': '#10b981', '质量管理': '#ec4899', '资源管理': '#f97316',
        '沟通管理': '#6366f1', '风险管理': '#ef4444', '采购管理': '#f59e0b',
        '干系人管理': '#84cc16'
    };

    function init() {
        document.getElementById('panel-close').addEventListener('click', hide);
        document.querySelectorAll('.tab').forEach(function(tab) {
            tab.addEventListener('click', function() {
                activeTab = tab.dataset.tab;
                document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
                tab.classList.add('active');
                render();
            });
        });
    }

    function show(node) {
        currentNode = node;
        var panel = document.getElementById('detail-panel');
        panel.classList.remove('hidden');
        document.getElementById('panel-title').textContent = node.label;

        // 面包屑
        var bc = document.getElementById('panel-breadcrumb');
        var parts = [];
        if (node.knowledgeArea) parts.push(node.knowledgeArea);
        if (node.processGroup) parts.push(node.processGroup);
        parts.push(node.label);
        bc.textContent = parts.join(' > ');

        // 重置到概述标签页
        activeTab = 'overview';
        document.querySelectorAll('.tab').forEach(function(t) { t.classList.remove('active'); });
        document.querySelector('.tab[data-tab="overview"]').classList.add('active');

        render();
    }

    function hide() {
        document.getElementById('detail-panel').classList.add('hidden');
        currentNode = null;
        // 通知 Matrix 取消高亮
        if (Matrix.selectCell) Matrix.selectCell(null);
    }

    function render() {
        if (!currentNode) return;
        var content = document.getElementById('panel-content');

        switch (activeTab) {
            case 'overview':
                content.innerHTML = renderOverview(currentNode);
                break;
            case 'itto':
                content.innerHTML = renderITTO(currentNode);
                break;
            case 'exam':
                content.innerHTML = renderExam(currentNode);
                break;
            case 'mnemonic':
                content.innerHTML = renderMnemonic(currentNode);
                break;
        }

        // 芯片点击跳转
        content.querySelectorAll('.chip[data-node-id]').forEach(function(chip) {
            chip.addEventListener('click', function() {
                var nodeId = chip.dataset.nodeId;
                var node = DataStore.getNode(nodeId);
                if (node) {
                    show(node);
                    Matrix.selectCell(nodeId);
                }
            });
        });
    }

    function renderOverview(node) {
        var html = '';

        // 类型标签
        html += '<div class="panel-section">';
        if (node.type === 'process') {
            html += '<span class="badge badge-ka" style="border:1px solid ' + (kaColorMap[node.knowledgeArea] || '#6e7681') + '">' + node.knowledgeArea + '</span>';
            html += '<span class="badge badge-process-group">' + node.processGroup + '过程组</span>';
        } else if (node.type === 'performance-domain') {
            html += '<span class="badge" style="background:rgba(52,211,153,0.2);color:#34d399">绩效域</span>';
        } else if (node.type === 'knowledge-area') {
            html += '<span class="badge" style="background:rgba(139,92,246,0.2);color:#8b5cf6">知识领域</span>';
        }
        html += '</div>';

        // 描述
        if (node.description) {
            html += '<div class="panel-section">';
            html += '<div class="panel-section-title">定义</div>';
            html += '<div class="panel-description">' + node.description + '</div>';
            html += '</div>';
        }

        // 要点
        if (node.notes) {
            html += '<div class="panel-section">';
            html += '<div class="panel-section-title">要点</div>';
            html += '<div class="panel-description">' + node.notes + '</div>';
            html += '</div>';
        }

        // 关联过程（对文档和工具节点）
        if (node.type === 'document' || node.type === 'tool') {
            var neighbors = DataStore.getNeighbors(node.id);
            var relatedProcs = neighbors.filter(function(n) { return n.type === 'process'; }).slice(0, 8);
            if (relatedProcs.length > 0) {
                html += '<div class="panel-section">';
                html += '<div class="panel-section-title">相关过程</div>';
                html += '<div>' + relatedProcs.map(function(n) {
                    return '<span class="chip" data-node-id="' + n.id + '">' + n.label + '</span>';
                }).join('') + '</div>';
                html += '</div>';
            }
        }

        return html;
    }

    function renderITTO(node) {
        if (node.type !== 'process') {
            return '<div class="panel-description" style="text-align:center;padding:32px 0;color:var(--text-muted)">仅过程节点有输入输出信息</div>';
        }

        var edges = DataStore.getEdges(node.id);

        var inputs = edges.filter(function(e) { return e.type === 'consumed-by'; }).map(function(e) {
            var sourceId = typeof e.source === 'object' ? e.source.id : e.source;
            return DataStore.getNode(sourceId) || { label: sourceId, id: sourceId };
        });

        var outputs = edges.filter(function(e) { return e.type === 'produces'; }).map(function(e) {
            var targetId = typeof e.target === 'object' ? e.target.id : e.target;
            return DataStore.getNode(targetId) || { label: targetId, id: targetId };
        });

        var tools = edges.filter(function(e) { return e.type === 'used-in'; }).map(function(e) {
            var sourceId = typeof e.source === 'object' ? e.source.id : e.source;
            return DataStore.getNode(sourceId) || { label: sourceId, id: sourceId };
        });

        var html = '<div class="itto-flow">';

        // 输入
        html += '<div class="itto-section">';
        html += '<div class="itto-section-title inputs">输入 (' + inputs.length + ')</div>';
        html += '<div>' + (inputs.length > 0 ? inputs.map(function(n) {
            return '<span class="chip" data-node-id="' + n.id + '">' + n.label + '</span>';
        }).join('') : '<span style="color:var(--text-muted);font-size:12px">暂无数据</span>') + '</div>';
        html += '</div>';

        // 箭头
        html += '<div class="itto-arrow">&darr;</div>';

        // 工具
        html += '<div class="itto-section">';
        html += '<div class="itto-section-title tools">工具与技术 (' + tools.length + ')</div>';
        html += '<div>' + (tools.length > 0 ? tools.map(function(n) {
            return '<span class="chip" data-node-id="' + n.id + '">' + n.label + '</span>';
        }).join('') : '<span style="color:var(--text-muted);font-size:12px">暂无数据</span>') + '</div>';
        html += '</div>';

        // 箭头
        html += '<div class="itto-arrow">&darr;</div>';

        // 输出
        html += '<div class="itto-section">';
        html += '<div class="itto-section-title outputs">输出 (' + outputs.length + ')</div>';
        html += '<div>' + (outputs.length > 0 ? outputs.map(function(n) {
            return '<span class="chip" data-node-id="' + n.id + '">' + n.label + '</span>';
        }).join('') : '<span style="color:var(--text-muted);font-size:12px">暂无数据</span>') + '</div>';
        html += '</div>';

        html += '</div>';
        return html;
    }

    function renderExam(node) {
        var freq = node.examFrequency || { choice: 0, case: 0, essay: 0 };
        var maxVal = Math.max(freq.choice, freq.case, freq.essay, 1);
        var total = freq.choice + freq.case + freq.essay;

        // 查找论文真题
        var kaLabelToId = {};
        DataStore.knowledgeAreas.forEach(function(ka) { kaLabelToId[ka.label] = ka.id; });
        var nodeId = kaLabelToId[node.knowledgeArea] || node.id;
        var essayTopics = (window.ESSAY_TOPICS_DATA || []).filter(function(t) {
            return t.knowledgeArea === nodeId || t.knowledgeArea === node.id;
        });

        var heatBadge = '';
        if (total > 15) heatBadge = '<span class="badge badge-heat-high">高频考点</span>';
        else if (total > 8) heatBadge = '<span class="badge badge-heat-medium">中频考点</span>';
        else heatBadge = '<span class="badge badge-heat-low">低频考点</span>';

        var html = '<div class="panel-section" style="text-align:center">' + heatBadge + '</div>';

        html += '<div class="panel-section">';
        html += '<div class="panel-section-title">考试频率</div>';
        html += '<div class="freq-bar-container">';

        html += '<div class="freq-bar">';
        html += '<span class="freq-bar-label">选择题</span>';
        html += '<div class="freq-bar-track"><div class="freq-bar-fill choice" style="width:' + (freq.choice / maxVal * 100) + '%"></div></div>';
        html += '<span class="freq-bar-value">' + freq.choice + '</span>';
        html += '</div>';

        html += '<div class="freq-bar">';
        html += '<span class="freq-bar-label">案例题</span>';
        html += '<div class="freq-bar-track"><div class="freq-bar-fill case" style="width:' + (freq.case / maxVal * 100) + '%"></div></div>';
        html += '<span class="freq-bar-value">' + freq.case + '</span>';
        html += '</div>';

        html += '<div class="freq-bar">';
        html += '<span class="freq-bar-label">论文题</span>';
        html += '<div class="freq-bar-track"><div class="freq-bar-fill essay" style="width:' + (freq.essay / maxVal * 100) + '%"></div></div>';
        html += '<span class="freq-bar-value">' + freq.essay + '</span>';
        html += '</div>';

        html += '</div></div>';

        if (essayTopics.length > 0) {
            html += '<div class="panel-section">';
            html += '<div class="panel-section-title">论文真题</div>';
            html += essayTopics.map(function(t) {
                return '<div class="essay-list-item">' +
                    '<span class="essay-list-year">' + t.year + '</span>' +
                    '<span>' + t.title + '</span>' +
                    '</div>';
            }).join('');
            html += '</div>';
        }

        return html;
    }

    function renderMnemonic(node) {
        var mnemonics = (window.MNEMONICS_DATA || []).filter(function(m) {
            return m.relatedNodes && m.relatedNodes.indexOf(node.id) !== -1;
        });

        if (mnemonics.length === 0) {
            return '<div class="panel-description" style="text-align:center;padding:32px 0;color:var(--text-muted)">该知识点暂无口诀</div>';
        }

        return mnemonics.map(function(m) {
            return '<div class="mnemonic-card">' +
                '<div class="panel-section-title" style="margin-bottom:8px">' + m.title + '</div>' +
                '<div class="mnemonic-phrase">' + m.mnemonic + '</div>' +
                '<div class="mnemonic-expansion">' + m.expansion + '</div>' +
                '</div>';
        }).join('');
    }

    return { init: init, show: show, hide: hide };
})();
