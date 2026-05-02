/**
 * Matrix - PMBOK矩阵视图渲染模块
 *
 * 负责：
 *   - buildMatrix(): 10知识领域 x 5过程组 HTML表格渲染
 *   - buildPerfDomains(): 8大绩效域卡片网格
 *   - buildPerfDetailCards(): 绩效域详情卡片（含口诀）
 *   - buildEssayTimeline(): 论文真题时间线
 *   - selectCell(): 选中/高亮矩阵单元格
 */
var Matrix = (function() {

    // ---- 知识领域颜色映射 ----
    var kaColorMap = {
        '整合管理': '#8b5cf6',
        '范围管理': '#3b82f6',
        '进度管理': '#06b6d4',
        '成本管理': '#10b981',
        '质量管理': '#ec4899',
        '资源管理': '#f97316',
        '沟通管理': '#6366f1',
        '风险管理': '#ef4444',
        '采购管理': '#f59e0b',
        '干系人管理': '#84cc16'
    };

    // ---- 绩效域颜色映射 ----
    var pdColorMap = {
        '干系人绩效域': '#34d399',
        '团队绩效域': '#38bdf8',
        '开发方法和生命周期绩效域': '#fb7185',
        '规划绩效域': '#a78bfa',
        '工作绩效域': '#fbbf24',
        '交付绩效域': '#f87171',
        '度量绩效域': '#2dd4bf',
        '不确定性绩效域': '#94a3b8'
    };

    // ---- 过程组顺序（短名 → 全名） ----
    var processGroupOrder = ['启动', '规划', '执行', '监控', '收尾'];
    var processGroupFullNames = {
        '启动': '启动过程组',
        '规划': '规划过程组',
        '执行': '执行过程组',
        '监控': '监控过程组',
        '收尾': '收尾过程组'
    };

    /**
     * 初始化：渲染矩阵和绩效域网格
     */
    function init() {
        buildMatrix();
        buildPerfDomains();
        buildPerfDetailCards();
        buildEssayTimeline();
    }

    /**
     * buildMatrix - 渲染PMBOK过程矩阵到 #pmbook-matrix
     *
     * 10知识领域(行) x 5过程组(列) 的HTML表格，
     * 每个单元格显示该交叉点上的过程节点。
     */
    function buildMatrix() {
        var container = document.getElementById('pmbook-matrix');
        if (!container) return;

        var knowledgeAreas = DataStore.knowledgeAreas;
        var processNodes = DataStore.nodesByType['process'] || [];

        // 构建 (knowledgeArea, processGroup) -> node 的快速查找索引
        var processIndex = {};
        processNodes.forEach(function(node) {
            var key = node.knowledgeArea + '|' + node.processGroup;
            processIndex[key] = node;
        });

        // 构建 table
        var html = '<table class="matrix">';

        // thead: 空角 + 5个过程组
        html += '<thead><tr>';
        html += '<th></th>';
        processGroupOrder.forEach(function(pg) {
            html += '<th>' + processGroupFullNames[pg] + '</th>';
        });
        html += '</tr></thead>';

        // tbody: 10行知识领域
        html += '<tbody>';
        knowledgeAreas.forEach(function(ka) {
            var kaColor = kaColorMap[ka.label] || '#6e7681';

            html += '<tr>';

            // 第一列：知识领域名称，带颜色左边框
            html += '<td style="border-left:3px solid ' + kaColor + '">' + ka.label + '</td>';

            // 每个过程组列
            processGroupOrder.forEach(function(pg) {
                var key = ka.label + '|' + pg;
                var process = processIndex[key];

                if (process) {
                    // 计算热度
                    var freq = process.examFrequency || { choice: 0, case: 0, essay: 0 };
                    var heatScore = (freq.essay || 0) + (freq.case || 0);
                    var heatClass = '';
                    if (heatScore > 7) {
                        heatClass = 'high';
                    } else if (heatScore > 4) {
                        heatClass = 'medium';
                    }

                    html += '<td class="cell-process" data-node-id="' + process.id + '">';
                    html += '<div class="cell-content">';
                    html += '<div class="cell-color-bar" style="background:' + kaColor + '"></div>';
                    html += '<span class="cell-name">' + process.label + '</span>';
                    html += '</div>';
                    if (heatClass) {
                        html += '<div class="cell-heat ' + heatClass + '"></div>';
                    }
                    html += '</td>';
                } else {
                    // 空单元格：该KA在此PG没有过程
                    html += '<td class="cell-empty"></td>';
                }
            });

            html += '</tr>';
        });
        html += '</tbody></table>';

        container.innerHTML = html;

        // 绑定单元格点击事件
        container.querySelectorAll('.cell-process').forEach(function(cell) {
            cell.addEventListener('click', function() {
                var nodeId = cell.dataset.nodeId;
                var node = DataStore.getNode(nodeId);
                if (node) {
                    selectCell(nodeId);
                    Panel.show(node);
                }
            });
        });
    }

    /**
     * buildPerfDomains - 渲染8大绩效域卡片到 #perf-domains-grid
     *
     * 每张卡片显示颜色条、标题（去掉"绩效域"后缀）、描述。
     */
    function buildPerfDomains() {
        var container = document.getElementById('perf-domains-grid');
        if (!container) return;

        var perfDomains = DataStore.performanceDomains;
        var html = '';

        perfDomains.forEach(function(pd) {
            var color = pdColorMap[pd.label] || '#6e7681';
            var shortTitle = pd.label.replace('绩效域', '');

            html += '<div class="perf-domain-card" data-node-id="' + pd.id + '">';
            html += '<div class="pd-card-accent" style="background:' + color + '"></div>';
            html += '<div class="pd-card-title">' + shortTitle + '</div>';
            html += '<div class="pd-card-desc">' + (pd.description || '') + '</div>';
            html += '</div>';
        });

        container.innerHTML = html;

        // 绑定卡片点击事件
        container.querySelectorAll('.perf-domain-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var nodeId = card.dataset.nodeId;
                var node = DataStore.getNode(nodeId);
                if (node) {
                    Panel.show(node);
                }
            });
        });
    }

    /**
     * buildPerfDetailCards - 渲染绩效域详情卡片到 #perf-detail-cards
     *
     * 较大的卡片布局，显示标题、描述、关联口诀。
     */
    function buildPerfDetailCards() {
        var container = document.getElementById('perf-detail-cards');
        if (!container) return;

        var perfDomains = DataStore.performanceDomains;
        var mnemonics = window.MNEMONICS_DATA || [];
        var html = '';

        perfDomains.forEach(function(pd) {
            var color = pdColorMap[pd.label] || '#6e7681';
            var shortTitle = pd.label.replace('绩效域', '');

            // 查找与此绩效域关联的口诀
            var relatedMnemonics = mnemonics.filter(function(m) {
                return m.relatedNodes && m.relatedNodes.indexOf(pd.id) !== -1;
            });

            html += '<div class="perf-detail-card" data-node-id="' + pd.id + '">';
            html += '<div class="pd-card-accent" style="background:' + color + '"></div>';
            html += '<div class="pd-detail-title">' + pd.label + '</div>';
            html += '<div class="pd-detail-goals">' + (pd.description || '') + '</div>';

            // 显示关联口诀
            if (relatedMnemonics.length > 0) {
                relatedMnemonics.forEach(function(m) {
                    html += '<div class="pd-detail-mnemonic">' + m.mnemonic + '</div>';
                });
            }

            html += '</div>';
        });

        container.innerHTML = html;

        // 绑定卡片点击事件
        container.querySelectorAll('.perf-detail-card').forEach(function(card) {
            card.addEventListener('click', function() {
                var nodeId = card.dataset.nodeId;
                var node = DataStore.getNode(nodeId);
                if (node) {
                    Panel.show(node);
                }
            });
        });
    }

    /**
     * buildEssayTimeline - 渲染论文真题时间线到 #essay-timeline
     *
     * 从 window.ESSAY_TOPICS_DATA 读取题目列表，
     * 每项显示年份、标题、难度星级、知识领域标签。
     */
    function buildEssayTimeline() {
        var container = document.getElementById('essay-timeline');
        if (!container) return;

        var essays = window.ESSAY_TOPICS_DATA || [];
        var html = '';

        essays.forEach(function(essay) {
            // 难度星级
            var difficulty = essay.difficulty || 0;
            var stars = '';
            for (var i = 0; i < 5; i++) {
                if (i < difficulty) {
                    stars += '<div class="essay-star filled"></div>';
                } else {
                    stars += '<div class="essay-star empty"></div>';
                }
            }

            // 查找关联的知识领域节点，获取标签颜色和名称
            var kaNode = DataStore.getNode(essay.knowledgeArea);
            var areaLabel = '';
            var areaColor = '';
            if (kaNode) {
                if (kaNode.type === 'knowledge-area') {
                    areaLabel = kaNode.label;
                    areaColor = kaColorMap[kaNode.label] || '#6e7681';
                } else if (kaNode.type === 'performance-domain') {
                    areaLabel = kaNode.label.replace('绩效域', '');
                    areaColor = pdColorMap[kaNode.label] || '#6e7681';
                } else {
                    areaLabel = kaNode.label;
                }
            }

            html += '<div class="essay-item" data-essay-id="' + essay.id + '" data-ka-id="' + essay.knowledgeArea + '">';
            html += '<span class="essay-year">' + essay.year + '</span>';
            html += '<span class="essay-title">' + essay.title + '</span>';
            html += '<div class="essay-difficulty">' + stars + '</div>';
            if (areaLabel) {
                html += '<span class="essay-area" style="color:' + areaColor + ';border:1px solid ' + areaColor + '">' + areaLabel + '</span>';
            }
            html += '</div>';
        });

        container.innerHTML = html;

        // 绑定题目点击事件
        container.querySelectorAll('.essay-item').forEach(function(item) {
            item.addEventListener('click', function() {
                var kaId = item.dataset.kaId;
                var node = DataStore.getNode(kaId);
                if (node) {
                    Panel.show(node);
                }
            });
        });
    }

    /**
     * selectCell - 高亮指定节点对应的矩阵单元格
     *
     * 移除所有 .selected，为匹配 nodeId 的单元格添加 .selected。
     *
     * @param {string} nodeId - 节点ID
     */
    function selectCell(nodeId) {
        // 移除所有已选中状态
        document.querySelectorAll('.cell-process.selected').forEach(function(cell) {
            cell.classList.remove('selected');
        });
        document.querySelectorAll('.perf-domain-card.selected').forEach(function(card) {
            card.classList.remove('selected');
        });
        document.querySelectorAll('.perf-detail-card.selected').forEach(function(card) {
            card.classList.remove('selected');
        });

        if (!nodeId) return;

        // 高亮矩阵单元格
        var targetCell = document.querySelector('.cell-process[data-node-id="' + nodeId + '"]');
        if (targetCell) {
            targetCell.classList.add('selected');
        }

        // 高亮绩效域卡片
        var targetCard = document.querySelector('.perf-domain-card[data-node-id="' + nodeId + '"]');
        if (targetCard) {
            targetCard.classList.add('selected');
        }

        // 高亮绩效域详情卡片
        var targetDetail = document.querySelector('.perf-detail-card[data-node-id="' + nodeId + '"]');
        if (targetDetail) {
            targetDetail.classList.add('selected');
        }
    }

    return {
        init: init,
        buildPerfDetailCards: buildPerfDetailCards,
        buildEssayTimeline: buildEssayTimeline,
        selectCell: selectCell
    };
})();
