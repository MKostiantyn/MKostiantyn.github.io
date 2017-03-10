$(function() {

	var headerH = $('#js-header').height(),
		thisBlock = $('#js-main-nav'),
		windowScrollH = $(window).scrollTop();

	if( windowScrollH >= headerH ) {

		thisBlock.addClass('main-nav--scroll');

	}
	else {

		thisBlock.removeClass('main-nav--scroll');

	}

});



$(function() {


	$('.main-header__text-js').typed({
		strings: ["html code from psd.","responsive web-sites.", "W3C valid, clean code.",  "bootstrap web-sites.", "pixel perfect sites"],
		typeSpeed: 80,
		backDelay: 1000,
		loop: true
	});

	new WOW().init();


	$(window).scroll( function () {

		var headerHeight = $('#js-header').height(),
		mainNav = $('#js-main-nav'),
		mainContent = $('#js-main-content'),
		windowScroll = $(this).scrollTop(),
		mainNavHeight = $('#js-main-nav').height(),
		skillsHeight = $('#js-skills').offset().top - 600,
		chart = $('.chart');

		if( windowScroll >= headerHeight ) {

			mainNav.addClass('main-nav--scroll');

		}
		else {

			mainNav.removeClass('main-nav--scroll');

		}

		if( windowScroll >= skillsHeight ) {

			if(!chart.hasClass('chart-active')) {

				chart.each( function() {

					$(this).addClass('chart-active')
					$(this).easyPieChart ({

						size:120,
						animate: 2000,
						lineCap:'butt',
						scaleColor: false,
						barColor: '#ff5252',
						trackColor: 'transparent',
						lineWidth: 10

					});
				});

			}
		}

	});

	$('#js-main-nav a').on('click', function(e) {

		e.preventDefault();

		var currentBlock = $(this).attr('href'),
			currentMenuHeight = $('#js-toggle').height();
			currentBlockOffset = $(currentBlock).offset().top - currentMenuHeight;

		$('html, body').animate({
			scrollTop: currentBlockOffset
		}, 500);

	});


	$('#js-toggle').on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('main-nav__toggle-block--hover');
		$('#js-menu').toggleClass('main-nav__list--active');
		$('#js-main-nav').toggleClass('main-nav--toggle-open');

	});


	$('#js-menu .main-nav__item').on('click', function(e) {

		e.preventDefault();


		$('#js-menu').removeClass('main-nav__list--active');
		$('#js-toggle').toggleClass('main-nav__toggle-block--hover');

	});


});


