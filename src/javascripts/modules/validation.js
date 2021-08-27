import $ from 'jquery';
import 'jquery-validation';
import 'jquery-validation/dist/localization/messages_ru';

$(function(){
  $('form').each(function() {
		$(this).validate({
			lang: 'rus', 
			rules: {
				Name: {
					required: true,
					minlength: 3,
					normalizer: function(value) {
						return $.trim(value);
					}
				},
				Email: {
					email: true,
					required: true
				}
			}
		});
	});
});