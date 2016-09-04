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
});