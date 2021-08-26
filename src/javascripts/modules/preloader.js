import $ from 'jquery';

let scrollWidth;
const loadData = new Promise(function (resolve) {
	if(typeof $('body').attr('data-preload') !== 'undefined') {
		let div = document.createElement('div');

		div.style.overflowY = 'scroll';
		div.style.width = '50px';
		div.style.height = '50px';
		document.body.append(div);
		scrollWidth = div.offsetWidth - div.clientWidth;
		div.remove();
		
		$('.preloader__loader').css('right', scrollWidth);

		$('body').addClass('fixed');
		
	}
	setTimeout(resolve, .1);
});

$(window).on('load', function () {		
	if(typeof $('body').attr('data-preload') !== 'undefined') {
		loadData.then(function () {
			$('.preloader__loader').css('right', '');
			$('body').removeClass('fixed');
			$('.preloader').addClass('hidden');
			$('.preloader').removeClass('visible');
		});
	}
});
	
