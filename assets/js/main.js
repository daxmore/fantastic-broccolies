$(document).ready(function () {

    // Smooth scrolling
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 800);
        }
    });

    // Reveal Animations on Scroll
    function reveal() {
        var revealed = false;
        var windowHeight = $(window).height();
        var elementVisible = 100;

        $('.bento-item, .feature-card, .blog-card-minimal').each(function () {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + windowHeight;

            if (elementTop < viewportBottom - elementVisible) {
                if (!$(this).hasClass('active')) {
                    $(this).addClass('active');
                    $(this).css({
                        'opacity': '0',
                        'transform': 'translateY(30px)'
                    }).animate({
                        'opacity': '1',
                        'transform': 'translateY(0)'
                    }, 600);
                }
            }
        });
    }

    $(window).on('scroll', reveal);
    reveal(); // Trigger once on load


    // Product Carousel Logic (Owl Carousel)
    var gearCarousel = $('#home-gear-section .owl-carousel');
    gearCarousel.owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });

    // Custom Navigation Events
    $('#home-gear-section .bi-chevron-left').parent().click(function () {
        gearCarousel.trigger('prev.owl.carousel');
    });

    $('#home-gear-section .bi-chevron-right').parent().click(function () {
        gearCarousel.trigger('next.owl.carousel');
    });

});
