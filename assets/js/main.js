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

    // Header Scroll Effect (Glassmorphism transition)
    var header = $('#page-home-header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            header.addClass('shadow-sm bg-white-translucent py-2').removeClass('py-3');
            header.css('background', 'rgba(255, 255, 255, 0.95)');
        } else {
            header.removeClass('shadow-sm bg-white-translucent py-2').addClass('py-3');
            header.css('background', 'rgba(255, 255, 255, 0.0)'); // Transparent at top
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

    // Hover effects for Bento Items (Parallax-ish)
    $('.bento-item').mousemove(function (e) {
        var moveX = (e.pageX * -1 / 15);
        var moveY = (e.pageY * -1 / 15);
        // Subtle movement of the image within the container
        // $(this).find('.bento-img').css('transform', 'scale(1.1) translate(' + moveX/10 + 'px, ' + moveY/10 + 'px)'); 
        // Commenting out as simple CSS hover is smoother for performance
    });

    // Product Scroller Logic
    const productContainer = $('#home-products-section .overflow-x-auto');
    const scrollAmount = 350; // Width of card + gap approx

    $('#home-products-section .bi-arrow-left').parent().click(function () {
        productContainer.animate({
            scrollLeft: productContainer.scrollLeft() - scrollAmount
        }, 300);
    });

    $('#home-products-section .bi-arrow-right').parent().click(function () {
        productContainer.animate({
            scrollLeft: productContainer.scrollLeft() + scrollAmount
        }, 300);
    });

});
