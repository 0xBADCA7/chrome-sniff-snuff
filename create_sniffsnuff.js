chrome.devtools.panels.create(
    "SniffSnuff", 
    "icon16.png", 
    "sniffsnuff.html",
    function()
    {
 	  /* stuff */
    }
);


chrome.devtools.panels.elements.createSidebarPane("SniffSnuff",
    function(sidebar)
    {
        //sidebar.setPage("sniffsnuff.html");
        sidebar.setObject({ someData: "Some data to show", b: "zzz" });
        //sidebar.setExpression(window);
    }
);