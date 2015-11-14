chrome.devtools.panels.create("My Panel",
    "MyPanelIcon.png",
    "Panel.html",
    function(panel) {
	// code invoked on panel creation
	alert(1);
    }
);

chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
    function(sidebar) {
        // sidebar initialization code here
        sidebar.setObject({ some_data: "Some data to show" });
	alert(2);
});


document.addEventListener('DOMContentLoaded', function() {
alert(/loaded/);
});
