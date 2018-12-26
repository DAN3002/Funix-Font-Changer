$(document).ready(function() {
	let data = JSON.parse(localStorage.getItem("font-changer"));
	console.log(data);
	init(data);
	$("#sequence-list").click(function() {
		init(data);
	});
	$(".langs-list").click(function(){
		init(data);
	});
	$(".closed-captions").hover(function(){
		$(this).css('border', '1px solid black');
	}, function(){
		$(this).css('border', 'none');
	});
});

function init(data) 
{
	$(".closed-captions").css({
		"font-family": data.font,
		"color": data.color,
		"font-size": data.size + "px",
		"background-color": data.background,
		"max-height": "none",
		"height": "auto"
	});		
}

chrome.runtime.onMessage.addListener(function(data){
	localStorage.setItem("font-changer", JSON.stringify(data));
	init(data);
});