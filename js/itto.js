/**
 * IttoApp - ITTO总览页面核心模块
 *
 * 4象限布局：
 *   左上: PMBOK 10×5矩阵
 *   左下: 选中过程的ITTO详情（三列：输入 | 工具与技术 | 输出）
 *   右上: 文档（输入/输出）分类折叠列表
 *   右下: 工具与技术分类折叠列表
 *
 * 交互：点击矩阵单元格 → 左下显示ITTO + 右侧高亮对应条目
 */
var IttoApp = (function() {

    // ---- 知识领域颜色 ----
    var kaColorMap = {
        '整合管理': '#8b5cf6', '范围管理': '#3b82f6', '进度管理': '#06b6d4',
        '成本管理': '#10b981', '质量管理': '#ec4899', '资源管理': '#f97316',
        '沟通管理': '#6366f1', '风险管理': '#ef4444', '采购管理': '#f59e0b',
        '干系人管理': '#84cc16'
    };

    // ---- 过程组顺序 ----
    var pgOrder = ['启动', '规划', '执行', '监控', '收尾'];

    // ---- 文档分类（细分10类） ----
    var docCategoryMap = {
        // 项目章程与最终报告
        'doc-charter': '项目章程与最终报告',
        'doc-final-report': '项目章程与最终报告',
        // 项目管理计划
        'doc-pm-plan': '项目管理计划',
        'doc-scope-plan': '项目管理计划',
        'doc-req-plan': '项目管理计划',
        'doc-sched-plan': '项目管理计划',
        'doc-cost-plan': '项目管理计划',
        'doc-qual-plan': '项目管理计划',
        'doc-res-plan': '项目管理计划',
        'doc-team-charter': '项目管理计划',
        'doc-comm-plan': '项目管理计划',
        'doc-risk-plan': '项目管理计划',
        'doc-proc-plan': '项目管理计划',
        'doc-stakeholder-plan': '项目管理计划',
        'doc-config-plan': '项目管理计划',
        'doc-qual-metrics': '项目管理计划',
        // 基准
        'doc-scope-baseline': '基准',
        'doc-sched-baseline': '基准',
        'doc-cost-baseline': '基准',
        'doc-config-baseline': '基准',
        // 范围与需求文件
        'doc-req-file': '范围与需求文件',
        'doc-req-trace': '范围与需求文件',
        'doc-scope-stmt': '范围与需求文件',
        'doc-wbs': '范围与需求文件',
        'doc-wbs-dict': '范围与需求文件',
        // 进度文件
        'doc-activity-list': '进度文件',
        'doc-activity-attr': '进度文件',
        'doc-milestone-list': '进度文件',
        'doc-sched-network': '进度文件',
        'doc-duration-est': '进度文件',
        'doc-est-basis': '进度文件',
        'doc-proj-sched': '进度文件',
        'doc-proj-calendar': '进度文件',
        // 成本文件
        'doc-cost-est': '成本文件',
        'doc-fund-req': '成本文件',
        // 质量文件
        'doc-qual-report': '质量文件',
        'doc-test-file': '质量文件',
        'doc-qual-measure': '质量文件',
        'doc-verified-deliverable': '质量文件',
        // 资源与团队文件
        'doc-res-req': '资源与团队文件',
        'doc-res-breakdown': '资源与团队文件',
        'doc-team-assign': '资源与团队文件',
        'doc-res-calendar': '资源与团队文件',
        // 风险与干系人登记册
        'doc-risk-register': '风险与干系人登记册',
        'doc-risk-report': '风险与干系人登记册',
        'doc-stakeholder-register': '风险与干系人登记册',
        // 采购文件
        'doc-proc-doc': '采购文件',
        'doc-source-select': '采购文件',
        'doc-contract': '采购文件',
        'doc-statement-work': '采购文件',
        // 日志与变更
        'doc-assumption-log': '日志与变更',
        'doc-change-log': '日志与变更',
        'doc-lessons-learned': '日志与变更',
        'doc-change-request': '日志与变更',
        'doc-approved-change': '日志与变更',
        'doc-config-item': '日志与变更',
        'doc-config-report': '日志与变更',
        // 工作绩效
        'doc-work-perf-data': '工作绩效',
        'doc-work-perf-info': '工作绩效',
        'doc-work-perf-report': '工作绩效',
        // 可交付成果
        'doc-deliverable': '可交付成果',
        'doc-accepted-deliverable': '可交付成果'
    };

    var docCategoryOrder = [
        '项目章程与最终报告', '项目管理计划', '基准',
        '范围与需求文件', '进度文件', '成本文件', '质量文件',
        '资源与团队文件', '风险与干系人登记册', '采购文件',
        '日志与变更', '工作绩效', '可交付成果'
    ];

    // ---- 工具分类（细分13类） ----
    var toolCategoryMap = {
        // 专家判断
        'tool-expert': '专家判断',
        // 数据收集
        'tool-brainstorm': '数据收集',
        'tool-interview': '数据收集',
        'tool-focus-group': '数据收集',
        'tool-questionnaire': '数据收集',
        'tool-benchmarking': '数据收集',
        'tool-observation': '数据收集',
        'tool-file-analysis': '数据收集',
        'tool-data-collection': '数据收集',
        'tool-nominal-group': '数据收集',
        // 数据分析
        'tool-alt-analysis': '数据分析',
        'tool-reserve-analysis': '数据分析',
        'tool-variance-analysis': '数据分析',
        'tool-trend-analysis': '数据分析',
        'tool-ev-analysis': '数据分析',
        'tool-root-cause': '数据分析',
        'tool-what-if': '数据分析',
        'tool-simulation': '数据分析',
        'tool-cost-benefit': '数据分析',
        'tool-quality-cost': '数据分析',
        'tool-performance-review': '数据分析',
        'tool-multi-criteria': '数据分析',
        'tool-assumption-constraint': '数据分析',
        'tool-historical-info': '数据分析',
        // 图表技术
        'tool-affinity': '图表技术',
        'tool-mind-map': '图表技术',
        'tool-flowchart': '图表技术',
        'tool-cause-effect': '图表技术',
        'tool-histogram': '图表技术',
        'tool-scatter': '图表技术',
        'tool-control-chart': '图表技术',
        'tool-matrix': '图表技术',
        'tool-system-interaction': '图表技术',
        'tool-stakeholder-matrix': '图表技术',
        // 人际关系与团队技能
        'tool-voting': '人际关系与团队技能',
        'tool-facilitation': '人际关系与团队技能',
        'tool-conflict-mgmt': '人际关系与团队技能',
        'tool-meeting': '人际关系与团队技能',
        'tool-problem-solving': '人际关系与团队技能',
        // 估算方法
        'tool-analogous': '估算方法',
        'tool-parametric': '估算方法',
        'tool-three-point': '估算方法',
        'tool-bottom-up': '估算方法',
        'tool-cost-aggregation': '估算方法',
        // 进度工具
        'tool-pdm': '进度工具',
        'tool-dependency': '进度工具',
        'tool-lead-lag': '进度工具',
        'tool-cpm': '进度工具',
        'tool-resource-opt': '进度工具',
        'tool-sched-compress': '进度工具',
        'tool-agile-release': '进度工具',
        'tool-rolling-wave': '进度工具',
        // 质量与审计
        'tool-inspection': '质量与审计',
        'tool-audit': '质量与审计',
        'tool-test': '质量与审计',
        'tool-pdca': '质量与审计',
        'tool-six-sigma': '质量与审计',
        'tool-design-for-x': '质量与审计',
        // 规划与分解
        'tool-decomposition': '规划与分解',
        'tool-prototype': '规划与分解',
        'tool-funding-limit': '规划与分解',
        'tool-procurement': '规划与分解',
        // 信息系统
        'tool-pmis': '信息系统'
    };

    var toolCategoryOrder = [
        '专家判断', '数据收集', '数据分析', '图表技术',
        '人际关系与团队技能', '估算方法', '进度工具',
        '质量与审计', '规划与分解', '信息系统'
    ];

    // ---- 状态 ----
    var selectedProcessId = null;
    var selectedItemId = null;

    // ===================================================================
    // 初始化
    // ===================================================================
    function init() {
        DataStore.init();
        buildMatrix();
        buildDocList();
        buildToolList();
        setupInteraction();
    }

    // ===================================================================
    // 左上: PMBOK矩阵
    // ===================================================================
    function buildMatrix() {
        var container = document.getElementById('itto-matrix');
        if (!container) return;

        var knowledgeAreas = DataStore.knowledgeAreas;
        var processNodes = DataStore.nodesByType['process'] || [];

        // Group processes by KA|PG (multiple processes per cell)
        var groups = {};
        processNodes.forEach(function(n) {
            var key = n.knowledgeArea + '|' + n.processGroup;
            if (!groups[key]) groups[key] = [];
            groups[key].push(n);
        });

        var html = '<table class="itto-matrix">';
        html += '<thead><tr><th></th>';
        pgOrder.forEach(function(pg) { html += '<th>' + pg + '</th>'; });
        html += '</tr></thead><tbody>';

        knowledgeAreas.forEach(function(ka) {
            var color = kaColorMap[ka.label] || '#6e7681';
            html += '<tr>';
            html += '<td class="row-label" style="border-left:3px solid ' + color + '">' + ka.label + '</td>';
            pgOrder.forEach(function(pg) {
                var procs = groups[ka.label + '|' + pg] || [];
                if (procs.length > 0) {
                    if (procs.length === 1) {
                        html += '<td class="cell-process" data-node-id="' + procs[0].id + '">';
                        html += '<span class="cell-color-bar" style="background:' + color + '"></span>';
                        html += '<span class="cell-name">' + procs[0].label + '</span>';
                        html += '</td>';
                    } else {
                        html += '<td class="cell-multi">';
                        procs.forEach(function(proc) {
                            html += '<div class="cell-process" data-node-id="' + proc.id + '">';
                            html += '<span class="cell-color-bar" style="background:' + color + '"></span>';
                            html += '<span class="cell-name">' + proc.label + '</span>';
                            html += '</div>';
                        });
                        html += '</td>';
                    }
                } else {
                    html += '<td class="cell-empty"></td>';
                }
            });
            html += '</tr>';
        });

        html += '</tbody></table>';
        container.innerHTML = html;
    }

    // ===================================================================
    // 右上: 文档分类折叠列表
    // ===================================================================
    function buildDocList() {
        var container = document.getElementById('itto-doc-list');
        if (!container) return;

        var docs = DataStore.nodesByType['document'] || [];
        var groups = {};
        docCategoryOrder.forEach(function(cat) { groups[cat] = []; });
        docs.forEach(function(doc) {
            var cat = docCategoryMap[doc.id] || '其他';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(doc);
        });

        container.innerHTML = buildFoldGroups(docCategoryOrder, groups, true);
    }

    // ===================================================================
    // 右下: 工具分类折叠列表
    // ===================================================================
    function buildToolList() {
        var container = document.getElementById('itto-tool-list');
        if (!container) return;

        var tools = DataStore.nodesByType['tool'] || [];
        var groups = {};
        toolCategoryOrder.forEach(function(cat) { groups[cat] = []; });
        tools.forEach(function(tool) {
            var cat = toolCategoryMap[tool.id] || '其他工具';
            if (!groups[cat]) groups[cat] = [];
            groups[cat].push(tool);
        });

        container.innerHTML = buildFoldGroups(toolCategoryOrder, groups, false);
    }

    // ===================================================================
    // 通用: 构建折叠组HTML
    // ===================================================================
    function buildFoldGroups(order, groups, showRole) {
        var html = '';
        order.forEach(function(cat) {
            var items = groups[cat] || [];
            if (items.length === 0) return; // 跳过空分组
            html += '<div class="fold-group" data-category="' + cat + '">';
            html += '<div class="fold-header" onclick="IttoApp.toggleFold(this)">';
            html += '<div class="fold-header-left">';
            html += '<span class="fold-arrow">\u25B6</span>';
            html += '<span class="fold-title">' + cat + '</span>';
            html += '</div>';
            html += '<span class="fold-count"><span class="hl-count">0</span>/' + items.length + '</span>';
            html += '</div>';
            html += '<div class="fold-body">';
            items.forEach(function(item) {
                html += '<div class="itto-item" data-id="' + item.id + '">';
                html += '<span class="itto-item-dot"></span>';
                html += '<span class="itto-item-label">' + item.label + '</span>';
                if (showRole) {
                    html += '<span class="itto-item-role"></span>';
                }
                html += '</div>';
            });
            html += '</div></div>';
        });
        return html;
    }

    // ===================================================================
    // 交互绑定
    // ===================================================================
    function setupInteraction() {
        var matrixContainer = document.getElementById('itto-matrix');
        if (!matrixContainer) return;

        matrixContainer.addEventListener('mouseover', function(e) {
            var cell = e.target.closest('.cell-process');
            if (cell && selectedProcessId !== cell.dataset.nodeId) {
                showProcessDetail(cell.dataset.nodeId);
            }
        });

        matrixContainer.addEventListener('mouseleave', function() {
            if (!selectedProcessId) {
                showPlaceholder();
            } else {
                showProcessDetail(selectedProcessId);
            }
        });

        matrixContainer.addEventListener('click', function(e) {
            var cell = e.target.closest('.cell-process');
            if (!cell) return;

            var nodeId = cell.dataset.nodeId;
            if (selectedProcessId === nodeId) {
                selectedProcessId = null;
                clearHighlight();
                clearMatrixSelection();
                showPlaceholder();
            } else {
                selectedProcessId = nodeId;
                selectedItemId = null;
                clearItemSelection();
                showProcessDetail(nodeId);
                highlightProcess(nodeId);
                setMatrixSelection(nodeId);
            }
        });

        // 右侧条目点击: 显示关联的子过程
        ['itto-doc-list', 'itto-tool-list'].forEach(function(containerId) {
            var listContainer = document.getElementById(containerId);
            if (!listContainer) return;

            listContainer.addEventListener('click', function(e) {
                var item = e.target.closest('.itto-item');
                if (!item) return;
                e.stopPropagation();

                var itemId = item.dataset.id;
                if (selectedItemId === itemId) {
                    // 取消选中
                    selectedItemId = null;
                    clearItemSelection();
                    if (selectedProcessId) {
                        showProcessDetail(selectedProcessId);
                    } else {
                        showPlaceholder();
                    }
                } else {
                    selectedItemId = itemId;
                    selectedProcessId = null;
                    clearHighlight();
                    clearMatrixSelection();
                    setItemSelection(itemId);
                    showItemDetail(itemId);
                }
            });
        });
    }

    // ===================================================================
    // 折叠组展开/收起
    // ===================================================================
    function toggleFold(headerEl) {
        var group = headerEl.closest('.fold-group');
        if (group) group.classList.toggle('open');
    }

    // ===================================================================
    // 条目选中态
    // ===================================================================
    function setItemSelection(itemId) {
        clearItemSelection();
        var target = document.querySelector('.itto-item[data-id="' + itemId + '"]');
        if (target) target.classList.add('active');
    }

    function clearItemSelection() {
        document.querySelectorAll('.itto-item.active').forEach(function(el) {
            el.classList.remove('active');
        });
    }

    // ===================================================================
    // 左下: 显示条目关联的子过程
    // ===================================================================
    function showItemDetail(itemId) {
        var container = document.getElementById('itto-detail');
        if (!container) return;

        var node = DataStore.getNode(itemId);
        if (!node) return;

        var edges = DataStore.getEdges(itemId);
        var relatedProcesses = [];

        edges.forEach(function(e) {
            var procId = null;
            var role = '';
            if (e.type === 'consumed-by') {
                // source=doc, target=process → doc is input of process
                procId = typeof e.target === 'object' ? e.target.id : e.target;
                role = 'as-input';
            } else if (e.type === 'produces') {
                // source=process, target=doc → process produces doc
                procId = typeof e.source === 'object' ? e.source.id : e.source;
                role = 'as-output';
            } else if (e.type === 'used-in') {
                // source=tool, target=process → tool used in process
                procId = typeof e.target === 'object' ? e.target.id : e.target;
                role = 'as-tool';
            }
            if (procId) {
                var proc = DataStore.getNode(procId);
                if (proc && proc.type === 'process') {
                    // Check if already added (same proc can have multiple edges)
                    var existing = relatedProcesses.filter(function(p) { return p.id === procId; });
                    if (existing.length > 0) {
                        if (existing[0].role !== role) {
                            existing[0].role = 'as-both';
                        }
                    } else {
                        relatedProcesses.push({ id: procId, node: proc, role: role });
                    }
                }
            }
        });

        var isTool = (node.type === 'tool');
        var roleLabel = isTool ? '工具' : '输入输出';

        var html = '';
        html += '<div class="item-detail-header">';
        html += '<div class="item-detail-name">' + node.label + '</div>';
        html += '<div style="font-size:11px;color:var(--text-muted)">' + roleLabel + ' · 关联 ' + relatedProcesses.length + ' 个过程</div>';
        if (node.description) {
            html += '<div class="item-detail-desc">' + node.description + '</div>';
        }
        html += '</div>';

        if (relatedProcesses.length === 0) {
            html += '<div class="detail-placeholder" style="height:auto;padding:20px 0">未关联任何过程</div>';
        } else {
            // Group by knowledge area
            var byKa = {};
            relatedProcesses.forEach(function(rp) {
                var ka = rp.node.knowledgeArea || '其他';
                if (!byKa[ka]) byKa[ka] = [];
                byKa[ka].push(rp);
            });

            Object.keys(byKa).forEach(function(ka) {
                var color = kaColorMap[ka] || '#6e7681';
                html += '<div class="item-detail-section-title" style="border-left:3px solid ' + color + ';padding-left:6px">' + ka + '</div>';
                byKa[ka].forEach(function(rp) {
                    var roleText = '';
                    var roleClass = rp.role;
                    if (rp.role === 'as-input') roleText = '输入';
                    else if (rp.role === 'as-output') roleText = '输出';
                    else if (rp.role === 'as-tool') roleText = '工具';
                    else if (rp.role === 'as-both') roleText = '输入/输出';

                    html += '<div class="item-detail-proc" data-proc-id="' + rp.id + '">';
                    html += '<div class="proc-color-bar" style="background:' + color + '"></div>';
                    html += '<div class="proc-info">';
                    html += '<div class="proc-name">' + rp.node.label + '</div>';
                    html += '<div class="proc-meta">' + rp.node.processGroup + '过程组</div>';
                    html += '</div>';
                    if (roleText) {
                        html += '<span class="proc-role ' + roleClass + '">' + roleText + '</span>';
                    }
                    html += '</div>';
                });
            });
        }

        container.innerHTML = html;

        // 点击关联过程 → 切换到过程详情
        container.querySelectorAll('.item-detail-proc').forEach(function(el) {
            el.addEventListener('click', function() {
                var procId = el.dataset.procId;
                if (procId) {
                    selectedProcessId = procId;
                    selectedItemId = null;
                    clearItemSelection();
                    showProcessDetail(procId);
                    highlightProcess(procId);
                    setMatrixSelection(procId);
                }
            });
        });
    }

    // ===================================================================
    // 左下: 显示过程详情（三列布局）
    // ===================================================================
    function showPlaceholder() {
        var container = document.getElementById('itto-detail');
        if (!container) return;
        container.innerHTML = '<div class="detail-placeholder">点击矩阵中的过程查看ITTO详情</div>';
    }

    function showProcessDetail(processId) {
        var container = document.getElementById('itto-detail');
        if (!container) return;

        var node = DataStore.getNode(processId);
        if (!node) return;

        var edges = DataStore.getEdges(processId);

        var inputs = edges.filter(function(e) { return e.type === 'consumed-by'; }).map(function(e) {
            return typeof e.source === 'object' ? e.source.id : e.source;
        });
        var outputs = edges.filter(function(e) { return e.type === 'produces'; }).map(function(e) {
            return typeof e.target === 'object' ? e.target.id : e.target;
        });
        var tools = edges.filter(function(e) { return e.type === 'used-in'; }).map(function(e) {
            return typeof e.source === 'object' ? e.source.id : e.source;
        });

        var color = kaColorMap[node.knowledgeArea] || '#6e7681';

        var html = '';
        // 头部
        html += '<div class="detail-header">';
        html += '<div class="detail-process-name" style="border-left:3px solid ' + color + ';padding-left:8px">' + node.label + '</div>';
        html += '<div class="detail-process-meta">';
        html += '<span>' + node.knowledgeArea + '</span>';
        html += '<span>' + node.processGroup + '过程组</span>';
        html += '</div>';
        if (node.description) {
            html += '<div class="detail-definition">' + node.description + '</div>';
        }
        html += '</div>';

        // 三列布局: 输入 | 工具与技术 | 输出
        html += '<div class="itto-3col">';

        // 列1: 输入
        html += '<div class="itto-col itto-col-inputs">';
        html += '<div class="itto-col-header inputs">输入 (' + inputs.length + ')</div>';
        html += '<div class="itto-col-body">';
        inputs.forEach(function(id) {
            var n = DataStore.getNode(id);
            html += '<div class="itto-col-item"><span class="itto-col-dot" style="background:#58a6ff"></span>' + (n ? n.label : id) + '</div>';
        });
        if (inputs.length === 0) html += '<div class="itto-col-empty">暂无</div>';
        html += '</div></div>';

        // 列2: 工具与技术
        html += '<div class="itto-col itto-col-tools">';
        html += '<div class="itto-col-header tools">工具与技术 (' + tools.length + ')</div>';
        html += '<div class="itto-col-body">';
        tools.forEach(function(id) {
            var n = DataStore.getNode(id);
            html += '<div class="itto-col-item"><span class="itto-col-dot" style="background:#d29922"></span>' + (n ? n.label : id) + '</div>';
        });
        if (tools.length === 0) html += '<div class="itto-col-empty">暂无</div>';
        html += '</div></div>';

        // 列3: 输出
        html += '<div class="itto-col itto-col-outputs">';
        html += '<div class="itto-col-header outputs">输出 (' + outputs.length + ')</div>';
        html += '<div class="itto-col-body">';
        outputs.forEach(function(id) {
            var n = DataStore.getNode(id);
            html += '<div class="itto-col-item"><span class="itto-col-dot" style="background:#3fb950"></span>' + (n ? n.label : id) + '</div>';
        });
        if (outputs.length === 0) html += '<div class="itto-col-empty">暂无</div>';
        html += '</div></div>';

        html += '</div>';

        // 论文写作框架（仅点击选中时显示）
        if (selectedProcessId === processId && window.ITTO_DETAILS_DATA) {
            var detail = null;
            for (var i = 0; i < window.ITTO_DETAILS_DATA.length; i++) {
                if (window.ITTO_DETAILS_DATA[i].id === processId) {
                    detail = window.ITTO_DETAILS_DATA[i];
                    break;
                }
            }
            if (detail) {
                html += '<div class="detail-essay-section">';
                html += '<div class="detail-essay-title">论文写作素材</div>';

                html += '<div class="detail-essay-block">';
                html += '<div class="detail-essay-label">问题描述</div>';
                html += '<div class="detail-essay-text">' + detail.problem + '</div>';
                html += '</div>';

                html += '<div class="detail-essay-block">';
                html += '<div class="detail-essay-label">方法</div>';
                html += '<div class="detail-essay-text">' + detail.method + '</div>';
                html += '</div>';

                html += '<div class="detail-essay-block">';
                html += '<div class="detail-essay-label">解决效果</div>';
                html += '<div class="detail-essay-text">' + detail.effect + '</div>';
                html += '</div>';

                html += '<div class="detail-essay-block">';
                html += '<div class="detail-essay-label">论文表达框架</div>';
                html += '<div class="detail-essay-framework">';
                if (detail.framework && detail.framework.length) {
                    detail.framework.forEach(function(step) {
                        html += '<div class="framework-step">' + step + '</div>';
                    });
                }
                html += '</div>';
                html += '</div>';

                html += '</div>';
            }
        }

        container.innerHTML = html;
    }

    // ===================================================================
    // 右侧高亮
    // ===================================================================
    function highlightProcess(processId) {
        var edges = DataStore.getEdges(processId);

        var docIds = {};
        edges.forEach(function(e) {
            if (e.type === 'consumed-by') {
                var id = typeof e.source === 'object' ? e.source.id : e.source;
                docIds[id] = 'input';
            }
            if (e.type === 'produces') {
                var id = typeof e.target === 'object' ? e.target.id : e.target;
                if (docIds[id] === 'input') {
                    docIds[id] = 'both';
                } else {
                    docIds[id] = 'output';
                }
            }
        });

        var toolIds = {};
        edges.forEach(function(e) {
            if (e.type === 'used-in') {
                var id = typeof e.source === 'object' ? e.source.id : e.source;
                toolIds[id] = true;
            }
        });

        updateItemList('itto-doc-list', docIds, true);
        updateItemList('itto-tool-list', toolIds, false);
    }

    function updateItemList(containerId, highlightIds, showRole) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var items = container.querySelectorAll('.itto-item');
        var groupsWithHighlight = {};

        items.forEach(function(item) {
            var id = item.dataset.id;
            if (highlightIds[id]) {
                item.classList.add('highlight');
                item.classList.remove('dim');
                var group = item.closest('.fold-group');
                if (group) {
                    var cat = group.dataset.category;
                    groupsWithHighlight[cat] = (groupsWithHighlight[cat] || 0) + 1;
                }
                if (showRole) {
                    var roleEl = item.querySelector('.itto-item-role');
                    if (roleEl) {
                        var role = highlightIds[id];
                        if (role === 'input') {
                            roleEl.textContent = '输入';
                            roleEl.className = 'itto-item-role input-only';
                        } else if (role === 'output') {
                            roleEl.textContent = '输出';
                            roleEl.className = 'itto-item-role output-only';
                        } else {
                            roleEl.textContent = '输入输出';
                            roleEl.className = 'itto-item-role both';
                        }
                    }
                }
            } else {
                item.classList.remove('highlight');
                item.classList.add('dim');
                if (showRole) {
                    var roleEl = item.querySelector('.itto-item-role');
                    if (roleEl) {
                        roleEl.textContent = '';
                        roleEl.className = 'itto-item-role';
                    }
                }
            }
        });

        container.querySelectorAll('.fold-group').forEach(function(group) {
            var cat = group.dataset.category;
            var count = groupsWithHighlight[cat] || 0;
            var countEl = group.querySelector('.hl-count');
            if (countEl) countEl.textContent = count;

            if (count > 0) {
                group.classList.add('open');
            } else {
                group.classList.remove('open');
            }
        });
    }

    function clearHighlight() {
        ['itto-doc-list', 'itto-tool-list'].forEach(function(containerId) {
            var container = document.getElementById(containerId);
            if (!container) return;

            container.querySelectorAll('.itto-item').forEach(function(item) {
                item.classList.remove('highlight', 'dim');
                var roleEl = item.querySelector('.itto-item-role');
                if (roleEl) {
                    roleEl.textContent = '';
                    roleEl.className = 'itto-item-role';
                }
            });

            container.querySelectorAll('.hl-count').forEach(function(el) {
                el.textContent = '0';
            });
        });
    }

    // ===================================================================
    // 矩阵选中态
    // ===================================================================
    function setMatrixSelection(nodeId) {
        document.querySelectorAll('.itto-matrix .cell-process.selected').forEach(function(c) {
            c.classList.remove('selected');
        });
        var target = document.querySelector('.itto-matrix .cell-process[data-node-id="' + nodeId + '"]');
        if (target) target.classList.add('selected');
    }

    function clearMatrixSelection() {
        document.querySelectorAll('.itto-matrix .cell-process.selected').forEach(function(c) {
            c.classList.remove('selected');
        });
    }

    // ===================================================================
    // Auto-init
    // ===================================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { toggleFold: toggleFold };
})();
