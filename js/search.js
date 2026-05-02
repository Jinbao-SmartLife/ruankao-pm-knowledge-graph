/**
 * Search - 搜索模块
 */
var Search = (function() {
    var selectedIndex = -1;
    var results = [];

    var typeColors = {
        'knowledge-area': '#8b5cf6',
        'performance-domain': '#34d399',
        'process-group': '#4ade80',
        'process': '#3b82f6',
        'document': '#8b949e',
        'tool': '#d29922'
    };

    function init() {
        var input = document.getElementById('search-input');
        var dropdown = document.getElementById('search-results');

        input.addEventListener('input', debounce(onSearch, 200));
        input.addEventListener('keydown', onKeyDown);
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-container')) {
                dropdown.classList.add('hidden');
            }
        });
    }

    function onSearch(e) {
        var query = e.target.value.trim();
        var dropdown = document.getElementById('search-results');

        if (!query) {
            dropdown.classList.add('hidden');
            return;
        }

        var q = query.toLowerCase();
        results = DataStore.nodes.filter(function(n) {
            return n.label.toLowerCase().indexOf(q) !== -1 ||
                   (n.description && n.description.toLowerCase().indexOf(q) !== -1);
        }).slice(0, 10);

        if (results.length === 0) {
            dropdown.classList.add('hidden');
            return;
        }

        selectedIndex = -1;
        dropdown.innerHTML = results.map(function(n, i) {
            return '<div class="search-result-item" data-index="' + i + '" data-id="' + n.id + '">' +
                '<span class="search-result-dot" style="background:' + (typeColors[n.type] || '#6e7681') + '"></span>' +
                '<span class="search-result-label">' + highlightMatch(n.label, query) + '</span>' +
                '<span class="search-result-type">' + (n.knowledgeArea || '') + '</span>' +
                '</div>';
        }).join('');

        dropdown.querySelectorAll('.search-result-item').forEach(function(item) {
            item.addEventListener('click', function() {
                selectResult(parseInt(item.dataset.index));
            });
        });

        dropdown.classList.remove('hidden');
    }

    function onKeyDown(e) {
        var dropdown = document.getElementById('search-results');
        if (dropdown.classList.contains('hidden')) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
            updateSelection();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            selectedIndex = Math.max(selectedIndex - 1, 0);
            updateSelection();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (selectedIndex >= 0) selectResult(selectedIndex);
        } else if (e.key === 'Escape') {
            dropdown.classList.add('hidden');
        }
    }

    function updateSelection() {
        document.querySelectorAll('.search-result-item').forEach(function(item, i) {
            item.classList.toggle('active', i === selectedIndex);
        });
    }

    function selectResult(index) {
        if (index < 0 || index >= results.length) return;
        var node = results[index];
        document.getElementById('search-results').classList.add('hidden');
        document.getElementById('search-input').value = '';

        // 使用 App.selectNode 来触发面板和视图切换
        if (App.selectNode) App.selectNode(node);
    }

    function highlightMatch(text, query) {
        var idx = text.toLowerCase().indexOf(query.toLowerCase());
        if (idx === -1) return text;
        return text.substring(0, idx) + '<mark>' + text.substring(idx, idx + query.length) + '</mark>' + text.substring(idx + query.length);
    }

    function debounce(fn, ms) {
        var timer;
        return function() {
            var args = arguments;
            var context = this;
            clearTimeout(timer);
            timer = setTimeout(function() { fn.apply(context, args); }, ms);
        };
    }

    return { init: init };
})();
