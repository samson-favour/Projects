$(document).ready(function () {

    "use strict"
    $('.slider').ripples({
        dropRadius: 9,
        perturbance: 0.01,
    });

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 60;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();



    $('.work').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: { enabled: true }
    });

    // Owl-carousel

    $('#team-members').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartspeed: 700,
        autoplayHoverPause: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },

            480: {
                items: 2
            },

            768: {
                items: 2
            }
        }
    })

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    })

    $('a.smoothscroll').click(function (event) {
        event.preventDefault()
        var section = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(section).offset().top - -2
        }, 1250, 'easeInOutExpo')
    });

    new WOW().init();

});

