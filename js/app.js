var App = (function() {
    function init() {
        // 1. DataStore.init() - load and index data
        DataStore.init();

        // 2. Matrix.init() - build matrix, perf domains, essay timeline
        Matrix.init();

        // 3. Panel.init() - wire up panel events
        Panel.init();

        // 4. Search.init() - wire up search
        Search.init();

        // 5. setupViewTabs() - wire up the 3 view tabs (矩阵/绩效域/论文)
        setupViewTabs();
    }

    function setupViewTabs() {
        // Wire up .nav-tab buttons in header
        var navTabs = document.querySelectorAll('.nav-tab');

        navTabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                var viewName = this.getAttribute('data-view');

                // Remove .active from all nav-tabs
                navTabs.forEach(function(t) {
                    t.classList.remove('active');
                });

                // Add .active to clicked tab
                this.classList.add('active');

                // Hide all view-containers
                var viewContainers = document.querySelectorAll('.view-container');
                viewContainers.forEach(function(container) {
                    container.style.display = 'none';
                });

                // Show the matching view-container
                var targetView = document.getElementById('view-' + viewName);
                if (targetView) {
                    targetView.style.display = 'block';
                }

                // Hide panel when switching views
                Panel.hide();
            });
        });
    }

    // Public method for search to trigger node selection
    function selectNode(node) {
        Panel.show(node);
        Matrix.selectCell(node.id);

        // Switch to matrix view if the node is a process
        if (node.type === 'process') {
            switchView('matrix');
        }
    }

    function switchView(viewName) {
        // Remove .active from all nav-tabs
        var navTabs = document.querySelectorAll('.nav-tab');
        navTabs.forEach(function(tab) {
            tab.classList.remove('active');
        });

        // Add .active to matching tab
        var targetTab = document.querySelector('[data-view="' + viewName + '"]');
        if (targetTab) {
            targetTab.classList.add('active');
        }

        // Hide all .view-container
        var viewContainers = document.querySelectorAll('.view-container');
        viewContainers.forEach(function(container) {
            container.style.display = 'none';
        });

        // Show #view-{viewName}
        var targetView = document.getElementById('view-' + viewName);
        if (targetView) {
            targetView.style.display = 'block';
        }
    }

    // Auto-init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    return { selectNode: selectNode };
})();