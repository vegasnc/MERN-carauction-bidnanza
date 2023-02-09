/***************** LIGHT THEME *********************/
$('#myonoffswitch56').click(function() {
	if (this.checked) {
		$('body').addClass('light-theme');
		$('body').removeClass('dark-theme');

		localStorage.removeItem("autolistdark");
		localStorage.setItem("autolistlight", true);
		checkOptions();

		const root = document.querySelector(':root');
		root.style = "";
		names()
	} 
	localStorageBackup();
});
/***************** LIGHT THEME *********************/

/***************** DARK THEME *********************/
$('#myonoffswitch57').click(function() {
	if (this.checked) {
		$('body').removeClass('light-theme');
		$('body').addClass('dark-theme');

		localStorage.removeItem("autolistlight");
		localStorage.setItem("autolistdark", true);
		checkOptions();

		localStorage.removeItem("autolistbgColor");
		localStorage.removeItem("autolistthemeColor");

		localStorage.setItem('dark-theme', true);
		localStorage.removeItem('light-theme', false);

		const root = document.querySelector(':root');
		root.style = "";
		names()
	} 
	localStorageBackup()
});
/***************** DARK THEME *********************/

/***************** LTR *********************/
$('#myonoffswitch54').click(function() {
	if (this.checked) {
		$('body').addClass('ltr');
		$('body').removeClass('rtl');
		$("html[lang=en]").attr("dir", "ltr");
		$(".select2-container").attr("dir", "ltr");
		localStorage.setItem("rtl", "false");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css" ));
		var carousel = $('.owl-carousel');
		$.each(carousel ,function( index, element ) {
		// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = false; //don't know if both are necessary
			carouselData.options.rtl = false;
			$(element).trigger('refresh.owl.carousel');
		});
		
		localStorage.removeItem("autolistrtl");
		localStorage.setItem("autolistltr", true);
	} 
});
/***************** LTR *********************/

/***************** RTL *********************/
$('#myonoffswitch55').click(function() {
	if (this.checked) {
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$("html[lang=en]").attr("dir", "rtl");
		$(".select2-container").attr("dir", "rtl");
		localStorage.setItem("rtl", "true");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style")?.setAttribute("href","../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel ,function( index, element ) {
		// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});
		localStorage.removeItem("autolistltr");
		localStorage.setItem("autolistrtl", true);
	}
});
/***************** RTL *********************/

function checkOptions() {
	// rtl
	if (document.querySelector('body').classList.contains('rtl')) {
		$('#myonoffswitch55').prop('checked', true);
	}
	// ltr
	if (document.querySelector('body').classList.contains('ltr')) {
		$('#myonoffswitch54').prop('checked', true);
	}
	// Light-Theme
	if (document.querySelector('body').classList.contains('light-theme')) {
		$('#myonoffswitch56').prop('checked', true);
	}
	// Dark-Theme
	if (document.querySelector('body').classList.contains('dark-theme')) {
		$('#myonoffswitch57').prop('checked', true);
	}
}

/***************** RESET *********************/
function resetData() {
	$('#myonoffswitch54').prop('checked', true);
	$('#myonoffswitch56').prop('checked', true);
	$('#myonoffswitch57').prop('checked', false);
	$('#myonoffswitch55').prop('checked', false);
	names();
	$('body')?.removeClass('light-theme');
	$('body')?.removeClass('dark-theme');
	$('body')?.removeClass('rtl');
	$('body')?.removeClass('ltr');
	$('body').addClass('ltr');
	$('body').removeClass('rtl');
	$("html[lang=en]").attr("dir", "ltr");
	$(".select2-container--default").attr("dir", "ltr");
	$(".select2-dropdown--below").attr("dir", "ltr");
	$("head link#style").attr("href", $(this));
	(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
	var carousel = $('.owl-carousel');
	$.each(carousel, function (index, element) {
		// element == this
		var carouselData = $(element).data('owl.carousel');
		carouselData.settings.rtl = false; //don't know if both are necessary
		carouselData.options.rtl = false;
		$(element).trigger('refresh.owl.carousel');
		window.dispatchEvent(new Event('resize'));
	});
}
/***************** RESET *********************/




$(function () {
	"use strict";
	/***************** layout-setting *********************/
	$('.layout-setting').on("click", function (e) {
		if (!(document.querySelector('body').classList.contains('dark-theme'))) {
			$('body').addClass('dark-theme');
	
			localStorage.setItem('autolistdark', true);
			localStorage.removeItem('autolistlight');
	
			$('#myonoffswitch57').prop('checked', true);
	
		} else {
			$('body').removeClass('dark-theme');
			$('body').addClass('light-theme');
	
			localStorage.setItem('autolistlight', true);
			localStorage.removeItem('autolistdark');
	
			$('#myonoffswitch56').prop('checked', true);
		}
	});
	/***************** layout-setting *********************/

	/***************** RTL HAs Class *********************/

	let bodyRtl = $('body').hasClass('rtl');
	if (bodyRtl) {
		$('body').addClass('rtl');
		$('body').removeClass('ltr');
		$("html[lang=en]").attr("dir", "rtl");
		$(".select2-container--default").attr("dir", "rtl");
		$(".select2-dropdown--below").attr("dir", "rtl");
		$("head link#style").attr("href", $(this));
		(document.getElementById("style").setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));
		var carousel = $('.owl-carousel');
		$.each(carousel ,function( index, element ) {
		// element == this
			var carouselData = $(element).data('owl.carousel');
			carouselData.settings.rtl = true; //don't know if both are necessary
			carouselData.options.rtl = true;
			$(element).trigger('refresh.owl.carousel');
		});
	}
	/***************** RTL HAs Class *********************/
    
});

	/***************** Add Switcher Classes *********************/

	if (!localStorage.getItem('autolistrtl') && !localStorage.getItem('autolistltr')) {

		/***************** RTL *********************/
		// $('body').addClass('rtl');
		/***************** RTL *********************/

		/***************** LTR *********************/
		// $('body').addClass('ltr');
		/***************** LTR *********************/

	}

	if (!localStorage.getItem('autolistlight') && !localStorage.getItem('autolistdark')) {

		/***************** Light THEME *********************/
		// $('body').addClass('light-theme');
		/***************** Light THEME *********************/

		/***************** DARK THEME *********************/
		// $('body').addClass('dark-theme');
		/***************** Dark THEME *********************/
	}

	/***************** Add Switcher Classes *********************/