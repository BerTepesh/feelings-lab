import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';
import Slider from '../components/slider';

class EventsSlider extends Slider {

	static get Defaults () {
		return $.extend({}, Slider.Defaults, {
			arrows: true,
			dots: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		});
	}

	constructor ($container, opts) {
		super ($container, opts);
	}
}

$.fn.eventsSlider = createPlugin(EventsSlider);
