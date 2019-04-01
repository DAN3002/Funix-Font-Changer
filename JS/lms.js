if(url.match("https://lms.funix.edu.vn/*") || url.match("https://lagunita.stanford.edu/*"))
{
	$(document).ready(function() {
		setUp();
	});

	function setUp()
	{
		init();
		$("#sequence-list").click(function() {
			init();
		});
		$(".langs-list").click(function(){
			init();
		});
		$(".closed-captions").hover(function(){
			$(this).css('border', '1px solid black');
		}, function(){
			$(this).css('border', 'none');
		});	

		chrome.runtime.onMessage.addListener(function(data){
			localStorage.setItem("font-changer", JSON.stringify(data));
			init();
		});	
	}

	function init() 
	{
		let data = JSON.parse(localStorage.getItem("font-changer"));
		$(".closed-captions").css({
			"font-family": data.font,
			"color": data.color,
			"font-size": data.size + "px",
			"background-color": data.background,
			"max-height": "none",
			"height": "auto"
		});			
	}	
}