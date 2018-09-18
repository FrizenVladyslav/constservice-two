$(function() {

	$('.hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('#header-menu').slideToggle('slow').toggleClass('active-nav');
	});

	$('#questions-number').mask("+38(999)999-99-99");

	$('#wms-check').click(function(){
		$('#for-wms-check').toggleClass('active-check');
	});

	$('.show-comments').click(function(){
		$(this).children().toggleClass('active-fa');
		$(this).siblings(".comments-reply").slideToggle('slow').toggleClass('active-reply');
	});
});
