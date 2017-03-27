$(function() {

    $('.main-nav__toggle-block').on('click', function(e) {

        e.preventDefault();

        $('.main-nav__list').toggleClass('main-nav__list--active');
        $(this).toggleClass('main-nav__toggle-block--active');
        $('.main-nav__toggle-item').toggleClass('main-nav__toggle-item--active');

    });


    $('#js-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });





});