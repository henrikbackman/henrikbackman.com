$(document).ready(function() {
	$("a[rel=group]").fancybox({
		'transitionIn'		: 'elastic',
		'transitionOut'		: 'elastic',
		'titlePosition' 	: 'over',
		'cyclic'			: 'true',
		'centerOnScroll'	: 'true',
		'overlayOpacity'	: '0.5',
		'overlayColor'		: '#000',
		'padding'			: 0,
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Bild ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
});