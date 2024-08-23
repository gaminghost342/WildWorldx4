function showTab(tabId) {
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    var activeTab = document.getElementById(tabId);
    if (activeTab) {
        activeTab.style.display = 'block';
    }
}

// Show the home tab by default
document.addEventListener('DOMContentLoaded', function() {
    showTab('home');
});
