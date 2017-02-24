$(function() {

	$('.main-header__text-js').typed({
		strings: ["html code from psd.","responsive web-sites.", "W3C valid, clean code.",  "bootstrap web-sites.", "pixel perfect sites"],
		typeSpeed: 80,
		backDelay: 1000,
		loop: true
	});


	

	


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
			mainContent.css('padding-top', mainNavHeight);

		}
		else {

			mainNav.removeClass('main-nav--scroll');
			mainContent.removeAttr('style');

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
		currentBlockOffset = $(currentBlock).offset().top - 50;

		$('html, body').animate({
			scrollTop: currentBlockOffset
		}, 500);

	});


	$('#js-toggle').on('click', function(e) {

		e.preventDefault();


		$('#js-menu').toggleClass('main-nav__list--active');
		$('#js-main-nav').toggleClass('main-nav--toggle-open');

	});


	$('#js-menu .main-nav__item').on('click', function(e) {

		e.preventDefault();


		$('#js-menu').removeClass('main-nav__list--active');

	});


	new WOW().init();


	

		if( $(window).scrollTop() >= $('#js-header').height() ) {

			$('#js-main-nav').addClass('main-nav--scroll');
			$('#js-main-content').css('padding-top', $('#js-main-nav').height());

		}


		if( $(window).scrollTop() >= $('#js-skills').offset().top - 600 ) {

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


