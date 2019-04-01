var tabQuery =
{
	url:[
		"https://lms.funix.edu.vn/*",
		"https://lagunita.stanford.edu/*",
	    "https://amara.org/*"
	]
};

$(document).ready(function() {
	$("#save").click(function() {
		save();
	});
	$("#guide").click(function(){
		window.open("https://github.com/DAN3002/Funix-Font-Changer");
	});
	init();
});

function checkFont() 
{
	if($("#font").val() === "")
	{
		$("#font").addClass("false");
		return false;
	}
	else
	{
		$("#font").removeClass("false");
		return true;
	}
}

function checkSize() 
{
	if(parseInt($("#size").val()) >= 0)
	{
		$("#size").removeClass("false");
		return true;		
	}
	else
	{
		$("#size").addClass("false");
		return false;
	}
}

function save() 
{
	if(checkFont() && checkSize())
	{
		let data =
		{
			font: $("#font").val(),
			size: $("#size").val(),
			color: $("#color").val(),
			background: $("#background").val()
		};
		update(data);
	}	
}

function update(data) 
{
	localStorage.setItem("font-changer", JSON.stringify(data));
	chrome.tabs.query(tabQuery, function(tabs){
		tabs.forEach( function(element) {
			chrome.tabs.sendMessage(element.id, data);
		});
	});
}

function init()
{
	var data = JSON.parse(localStorage.getItem("font-changer"));
	$("#font").val(data.font);
	$("#size").val(data.size);
	$("#color").val(data.color);
	$("#background").val(data.background);
}