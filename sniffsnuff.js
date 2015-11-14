var out = function(args)
{
	chrome.devtools.inspectedWindow.eval('console.log("' + args + '")');
};


chrome.devtools.network.onRequestFinished.addListener(
	function(request)
	{
		if (!request)
			return false;

		//console.debug(request);

		if (options.monitorResponses)
		{
			request.getContent(
				function(content)
				{
					parseContent(content, request.request.url);
				}
			);
		}
	}
);


chrome.devtools.network.onNavigated.addListener(
	function(url)
	{
		document.write("Navigating to " + url + "<br>");
	}
);


function parseContent(body, uri)
{
	console.debug(uri);

	if (body)
	{
		//console.debug("This is the request body: ", body.substring(0, 15));
		doSearch(search.keyword, body, uri);
	}
}


function doSearch(what, where, uri)
{
	if (!(what && where))
		return false

	console.debug("Looking for %s in %s", what.substr(0, 15), where.substr(0, 15));

	var re = new RegExp(what, options.ignoreCase? 'gim' : 'gm');
	var results = re.exec(where);

	console.debug(results);

	if (!results)
		return false

	var match = results[0];
	var index = parseInt(results['index'], 10);
	var input = results['input'];
	var location = input.substring(index - 10, index + 10);


	document.write("Found " +
		"<pre>" +
		match +
		"</pre>" +
		" in " +
		"<pre>" + 
		location +
		"</pre>" +
		"<hr>");
	
// 	if (results && results.length)
// 	{
// 		document.write("Found \"" +
// 			what +
// 			"\" in ... " +
// 			where.substring(where[results[0].index] - 10, where[results[0].index] + 10) +
// 			"<br>");
// 	}
}


function cbDocumentReady()
{
	console.debug("SniffSnuff is loaded and ready");
	
// 	for (key in options)
// 	{
// 		console.debug(key, options[key]);
// 	}
	//console.debug(doSearch("lol", "lollipop"));
}


var options = 
{
	monitorRequests: true,
	monitorResponses: true,
	monitorURLs: true,
	ignoreCase: true
};

var search = 
{
	keyword: "body"	
};

document.addEventListener("DOMContentLoaded", cbDocumentReady);
