$(document).ready(function() {

	nav();
	obstacles();
	countdown();
	special_select();

	$('input[placeholder], textarea[placeholder]').placeholder();

});

// Scroll to site section
var nav = function() {

	$("#menu a").click(function(e){
		$.scrollTo("#" + $(this).data("attr"), 300);
		e.preventDefault();
	});

}

// Show/hide large obstacles
var obstacles = function() {

	var obstacles_link = $(".obstacles");
	var large_obstacles = $(".large_obstacles");

	obstacles_link.click(function(e){
		obstacles_link.removeClass("active");
		$(this).addClass("active");
		large_obstacles.hide();
		$("#" + $(this).data("attr")).fadeIn();
		e.preventDefault();
	});

}

// Clock countdown
var countdown = function() {

	var amount = $("#countdown");

	setTimeout(function(){
		if( amount.html() > 0 ){
			amount.html( amount.html() - 1 );
			countdown();
		}
	}, 60000)

}

// Customized <select>
var special_select = function() {

	$body = $("body");
	$select_tc = $(".select_team_color");
	$dropdown_tc = $(".dropdown_team_color");
	$tc_link = $(".dropdown_team_color a");
	$select_g = $(".select_gender");
	$dropdown_g = $(".dropdown_gender");
	$g_link = $(".dropdown_gender a");

	// Select team color
	$body.not($select_tc).click(function(){
		$dropdown_tc.hide();
	});

	$select_tc.click(function(){
		$dropdown_tc.toggle();
		return false;
	});
	
	$tc_link.click(function(e){
		$select_tc.html($(this).html());
		e.preventDefault();
	});

	// Select Gender
	$body.not($select_g).click(function(){
		$dropdown_g.hide();
	});

	$select_g.click(function(){
		$dropdown_g.toggle();
		return false;
	});
	
	$g_link.click(function(e){
		$select_g.html($(this).html());
		e.preventDefault();
	});

}