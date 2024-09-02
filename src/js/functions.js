
/*-------------------------------------------
	Browser Detection
-------------------------------------------*/

// For when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


/*-------------------------------------------
	General Functions
-------------------------------------------*/


(function($){


	/* On Page Ready */

	$(document).ready(function (){


		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


		/*-------------------------------------------
			Learn More
		-------------------------------------------*/

		// Example: https://css-tricks.com/snippets/jquery/smooth-scrolling/


		$(function() {
		
			$('a[href*="#"]:not([href="#"])').click(function() {
		
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		
					var target = $(this.hash);
		
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		
					if (target.length) {
		
						$('#page .scroll').animate({
		
							scrollTop: target.offset().top
		
						}, 1000);
		
						return false;
					
					}
		
				}
		
			});
		
		});


		// $('.more a').smoothScroll({

			// offset: 0

		// });


		/*-------------------------------------------
			Sample Smooth Scroll Structure
		-------------------------------------------*/

		// Notes...


		// $('.answers .top a').smoothScroll({

			// offset: -20

		// });


		/*-------------------------------------------
			Open External Links in New Window
		-------------------------------------------*/

		// Notes...


		$('a[rel="external"]').click( function() {

			window.open( $(this).attr('href') );

			return false;

		});


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Add class of "dev" to <body>


		// $("body").addClass("dev");


		// Displays screen size on the fly.


		// var windowWidth = $(window).width();

		// var windowHeight = $(window).height();

		// $("#footer").after('<div id="dev"></div>');

		// $("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


	/* On Page Load */


	$(window).load(function() {


		/*-------------------------------------------
			Title
		-------------------------------------------*/

		// Notes...


		/*-------------------------------------------
			Fade In Content
		-------------------------------------------*/

		// Notes...


		$('body').fadeIn(500);


		/*-------------------------------------------
			Sample Flexslider Structure
		-------------------------------------------*/

		// Notes...


		// $(".flexslider").flexslider({

			// animation: "fade",
			// slideshowSpeed: 5000,
			// useCSS: false,
			// controlNav: false,
			// directionNav: true,
			// start: function(slider){

				// $("body").removeClass("loading");

			// }

		// });


	});


	/* On Window Resize */


	$(window).resize(function() {


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/


		// Displays screen size on the fly.


		// var windowWidth = $(window).width();

		// var windowHeight = $(window).height();

		// $("#dev").text(windowWidth + ' ' + 'W' + ' ' + '/' + ' ' + windowHeight + ' ' + 'H');


	});


})(window.jQuery);