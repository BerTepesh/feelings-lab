import $ from 'jquery';

$(function(){
	$('[href^="#"]')
		.not('[href="#"]')
  	.not('[href="#0"]')
		.on('click', function(event){			
		if ($(this).attr('hash') !== '') {
			event.preventDefault();
			const hash = $(this).prop('hash');	
			const target = $('[data-scroll-target="'+hash+'"]');
			
			if(target.length > 0)  {
				$('html, body').animate({
					scrollTop: target.offset().top - $('header').height()
				}, 800, function(){});
			}
		}
	});
});