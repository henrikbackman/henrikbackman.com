$(document).ready(function(){

	$("div.result").show();

	$("a.arrow").css({ backgroundPosition:"left bottom" });

	$("a.arrow").click(function(){
		$(this).parents(".div_750").children(".result").toggle();
		$(this).css({ backgroundPosition:"left top" });
		return false; 
	});
	
	$("a.arrow").click(function(){
		$(this).parents(".div_285").children(".sort").toggle();
		$(this).css({ backgroundPosition:"left top" });
		return false; 
	});	
	
	$("a.arrow").toggle(
		function () {
			$(this).css({ backgroundPosition:"top left" });
		},
		function () {
			$(this).css({ backgroundPosition:"bottom left" });
		}
	);	
	
});
