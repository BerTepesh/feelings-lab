import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../components/slider';

class IntroSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			arrows: false,
			dots: false,
			autoplay: true,
  		autoplaySpeed: 3000,
			slidesToShow: 1,
			slidesToScroll: 1
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.introSlider = createPlugin(IntroSlider);
