$(document).ready(function () {
	//alert("gg");
	$('#menu-toggle').click(function () {
		$(this).toggleClass('open');
	})

	/*
	Dropdown with Multiple checkbox select with jQuery - May 27, 2013
	(c) 2013 @ElmahdiMahmoud
	license: https://www.opensource.org/licenses/mit-license.php
*/

	$(".dropdown dt a").on('click', function () {
		$(this).parent().parent().find('ul').slideToggle('fast');
	});

	$(".dropdown dd ul li a").on('click', function () {
		$(this).parent().parent().find('ul').hide();
	});

	function getSelectedValue(id) {
		return $("#" + id).find("dt a span.value").html();
	}

	$(document).bind('click', function (e) {
		var $clicked = $(e.target);
		if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
	});

	$('.mutliSelect input[type="checkbox"]').on('click', function () {

		var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
			title = $(this).val() + ",";
		if ($(this).is(':checked')) {
			var html = '<span title="' + title + '">' + title + '</span>';
			//console.log();
			//$('.multiSel').append(html);
			$(this).closest('.dropdown').find('.multiSel').append(html);
			$(".hida").hide();
		} else {
			$(this).closest('.dropdown').find('span[title="' + title + '"]').remove();
			//$('span[title="' + title + '"]').remove();
			var ret = $(".hida");
			$('.dropdown dt a').append(ret);

		}
	});
})
