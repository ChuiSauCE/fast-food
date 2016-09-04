$(document).ready(function () {
	 // ADD SLIDEDOWN ANIMATION TO DROPDOWN //
	$('.dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	// ADD SLIDEUP ANIMATION TO DROPDOWN //
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});
	 // BOOTSTARP DROPDOWN HOVER //
	$('.dropdown').hover(function(){
			$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
			$(this).addClass("open");
	}, function(){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
		$(this).removeClass("open");
	});
	$('.cool-imgs img').hover(function(){
		// $(".cool-imgs img").each(function(){
		// 		var tmatrix = $(this).css('transform');
		// 		var values = tmatrix.split('(')[1].split(')')[0].split(',')
		// 		var a = values[0];
		// 		var b = values[1];
		// 		var angle = angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		// 		$(this).css({'transform': 'rotate('+ angle + 10 +'deg)  translateX(0px)'});
    // });
		var tmatrix = $(this).css('transform');
		var values = tmatrix.split('(')[1].split(')')[0].split(',')
		var a = values[0];
		var b = values[1];
		var angle = angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		$(this).css({'transform': 'rotate('+ angle + 10 +'deg) translateX(50px)'});
	}, function(){
		var tmatrix = $(this).css('transform');
		var values = tmatrix.split('(')[1].split(')')[0].split(',')
		var a = values[0];
		var b = values[1];
		var angle = angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
		$(this).css({'transform': 'rotate('+ angle +'deg) translateX(0px)'});
	});
});
