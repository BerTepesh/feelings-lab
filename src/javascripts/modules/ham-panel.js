import $ from 'jquery';

$(function(){
	$('.ham-trigger').click(function(){
		$(this).toggleClass('active');
		$('.page-content').toggleClass('ham-active');
		//$('body').toggleClass('fixed');
		$('.ham-panel').toggleClass('active');
		$('.header').toggleClass('hamed');
		return false;
	});

	$(document).mouseup(function (e){ 
		var panel = $('.ham-panel'); 
		var header = $('.header'); 

		if (!panel.is(e.target) && panel.has(e.target).length === 0 && panel.hasClass('active') 
				&& !header.is(e.target) && header.has(e.target).length === 0) { 
			$('.ham-trigger').removeClass('active');
			$('.page-content').removeClass('ham-active');
			//$('body').removeClass('fixed');
			$('.ham-panel').removeClass('active');
			$('.header').removeClass('hamed');
			return false;
		}
	});

});