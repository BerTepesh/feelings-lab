import $ from 'jquery';

import createPlugin from 'jquery-plugin-generator';

class Tabs {

	constructor ($container) {
		this.$container = $container;
    this.update();
	}

	update () {
		const $container = this.$container;
		const $btn = $container.find(`[${ 'data-tabs-btn' }]`);
		$btn.on('click', function(event){	
			let href = $(this).attr('href');
			let hash = href.substring(1);
			if (hash !== '') {
				event.preventDefault();
				const target = $('[data-tabs-content="'+hash+'"]');
				if(target.length > 0)  {
					$container.find(`[${ 'data-tabs-content' }]`).removeClass("active");
					target.addClass('active')
					$btn.removeClass('active');
					$(this).addClass('active');
				}
			}
		});
	}

	init () {
	}
}

$.fn.tabs = createPlugin(Tabs, {
	'api': ['instance', 'update']
});


// $(function() {
// 	$('[data-plugin="tabs"]').tabs();
// })
