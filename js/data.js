/**
 * DataStore - 数据加载与索引模块
 */
var DataStore = (function() {
    var nodes = [];
    var edges = [];
    var nodeById = {};
    var nodesByKnowledgeArea = {};
    var nodesByProcessGroup = {};
    var nodesByType = {};
    var edgesBySource = {};
    var edgesByTarget = {};
    var knowledgeAreas = [];
    var processGroups = [];
    var performanceDomains = [];
    // KA×PG 快速索引: "KA名|PG名" → process node
    var processByKaPg = {};

    function init() {
        nodes = window.NODES_DATA || [];
        edges = window.EDGES_DATA || [];

        nodes.forEach(function(n) {
            nodeById[n.id] = n;

            if (n.knowledgeArea) {
                if (!nodesByKnowledgeArea[n.knowledgeArea]) nodesByKnowledgeArea[n.knowledgeArea] = [];
                nodesByKnowledgeArea[n.knowledgeArea].push(n);
            }

            if (n.processGroup) {
                if (!nodesByProcessGroup[n.processGroup]) nodesByProcessGroup[n.processGroup] = [];
                nodesByProcessGroup[n.processGroup].push(n);
            }

            if (!nodesByType[n.type]) nodesByType[n.type] = [];
            nodesByType[n.type].push(n);

            // Build KA×PG index for processes
            if (n.type === 'process' && n.knowledgeArea && n.processGroup) {
                processByKaPg[n.knowledgeArea + '|' + n.processGroup] = n;
            }
        });

        edges.forEach(function(e) {
            if (!edgesBySource[e.source]) edgesBySource[e.source] = [];
            edgesBySource[e.source].push(e);
            if (!edgesByTarget[e.target]) edgesByTarget[e.target] = [];
            edgesByTarget[e.target].push(e);
        });

        knowledgeAreas = nodes.filter(function(n) { return n.type === 'knowledge-area'; });
        processGroups = nodes.filter(function(n) { return n.type === 'process-group'; });
        performanceDomains = nodes.filter(function(n) { return n.type === 'performance-domain'; });
    }

    function getNode(id) {
        return nodeById[id];
    }

    function getProcessByKaPg(kaLabel, pgShortName) {
        return processByKaPg[kaLabel + '|' + pgShortName] || null;
    }

    function getNeighbors(nodeId) {
        var neighborIds = new Set();
        edges.forEach(function(e) {
            var s = typeof e.source === 'object' ? e.source.id : e.source;
            var t = typeof e.target === 'object' ? e.target.id : e.target;
            if (s === nodeId) neighborIds.add(t);
            if (t === nodeId) neighborIds.add(s);
        });
        return Array.from(neighborIds).map(function(id) { return nodeById[id]; }).filter(Boolean);
    }

    function getEdges(nodeId) {
        return edges.filter(function(e) {
            var s = typeof e.source === 'object' ? e.source.id : e.source;
            var t = typeof e.target === 'object' ? e.target.id : e.target;
            return s === nodeId || t === nodeId;
        });
    }

    return {
        init: init,
        get nodes() { return nodes; },
        get edges() { return edges; },
        getNode: getNode,
        getProcessByKaPg: getProcessByKaPg,
        getNeighbors: getNeighbors,
        getEdges: getEdges,
        get knowledgeAreas() { return knowledgeAreas; },
        get processGroups() { return processGroups; },
        get performanceDomains() { return performanceDomains; },
        nodesByKnowledgeArea: nodesByKnowledgeArea,
        nodesByProcessGroup: nodesByProcessGroup,
        nodesByType: nodesByType,
        edgesBySource: edgesBySource,
        edgesByTarget: edgesByTarget
    };
})();
