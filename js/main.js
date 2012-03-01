$(function() {

	var viewport = $(window),
		body = $('body'),
		
		header = $('#top div.wrap'),
		search = $('#search');
		
	//  Give a CSS hook
	body.addClass('js');
	
	//  A neat little
	if(window.location.pathname === '/') {
		body.css({position: 'relative', top: -50, opacity: 0})
			.animate({ top: 0, opacity: 1 });
	}
		
	/**
		Search box
	*/
		
	//  Hide the search
	search.css('margin-top', -(search.outerHeight()));
	
	//  Append some way of making it come back
	var clicked = 1,
		marginTop = search.css('margin-top');
	
	header.append('<span id="s">Search</span>').children('#s').click(function() {
		
		//  Move the
		search.animate({marginTop: clicked % 2 === 0 ? marginTop : 0});
		
		if(clicked % 2 === 0) {
			$(this).animate({opacity: 0}, 200, function() {
				$(this).removeClass("close").text('Search').animate({opacity: 1}, 200);
			});
			
			search.animate({marginTop: marginTop});
		} else {
			$(this).animate({opacity: 0}, 200, function() {
				$(this).addClass("close").text('Close').animate({opacity: 1}, 200);
			});
		
			search.animate({marginTop: 0});
		}
		
		//  Increment counter
		clicked++;
	});
});