window.onload = function() {
	if (document.getElementsByTagName("article")[0].getAttribute("role") == "post") 
	{
		generateContents();
	}
}

function generateContents() {
	// New DOM elements to create.
	var a, li, ul = document.createElement(ul);

	// Iterate over top-level elements of page body.
	var elements = document.getElementsByClassName("body")[0].children;
	for(var i = 0; i < elements.length; i++)
	{
		// Skip if not a heading.
		if (!/H\d/.test(elements[i].tagName)) continue;
		
		// Add the TOC entry.
		li = document.createElement('li');
		a = document.createElement('a');
		a.href = "#c"+i;
		a.innerText = elements[i].innerText;
		li.appendChild(a);
		ul.appendChild(li);

		// Add a matching anchor to link to.
		a = document.createElement('a');
		a.name = 'c'+i;
		elements[i].appendChild(a);
	}

	document.getElementsByTagName("aside")[0].appendChild(ul);
}
