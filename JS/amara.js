if (url.match("https://amara.org/*")) {
	$(document).ready(function() {			
		addJquery();		
		setUp();		
	});

	function setUp()
	{					
		init(8000);			
		chrome.runtime.onMessage.addListener(function(data){
			localStorage.setItem("font-changer", JSON.stringify(data));
			init(10);
		});	
	}

	function addJquery()
	{
		var jq = document.createElement('script');
		jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
		document.getElementsByTagName('head')[0].appendChild(jq);	
	}

	function init(time) {
		let data = 	JSON.parse(localStorage.getItem("font-changer"));
		setTimeout(function(){
			$($($('iframe')[1]).contents().find("[id^=subtitle-]")).css({
				"font-family": data.font,
				"color": data.color,
				"font-size": data.size + "px",
				"background-color": data.background,
				"max-height": "none",
				"height": "auto"
			});	
		}, time);
	}
}