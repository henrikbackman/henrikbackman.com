$(document).ready(function(){
	$("div#topline a").click(function(){
		$("#top").slideToggle("slow");
		$(this).toggleClass("active");
	});
});