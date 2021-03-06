(function ($) {
    "use strict";

    /* ---------------------------------------------
     NAVBAR SHRINK
     --------------------------------------------- */
    $(document).on('ready', function () {

        /* ---------------------------------------------
         JQUERY TO COLLAPSE THE NAVBAR ON SCROLL
         --------------------------------------------- */
        function onScrollCollapse() {
            $(window).on('scroll', function () {
                if ($(".navbar").offset().top > 50) {
                    $(".navbar-fixed-top").addClass("top-nav-collapse");
                } else {
                    $(".navbar-fixed-top").removeClass("top-nav-collapse");
                }
            });
        }

        /* ---------------------------------------------
         JQUERY FOR PAGE SCROLLING FEATURE - REQUIRES JQUERY EASING PLUGIN
         --------------------------------------------- */
        function smoothScroll() {
            $('a.page-scroll').on('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: ($($anchor.attr('href')).offset().top - 52)
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        }

        /* ---------------------------------------------
         SCROLL TO TOP
         --------------------------------------------- */
        function scrollToTOpInit() {
            $(window).on('scroll', function () {
                if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                    $('div#scroll-up').fadeIn();    // Fade in the arrow
                } else {
                    $('div#scroll-up').fadeOut(400);
                }
            });

            $('div#scroll-up').on('click', function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 1000);
                return false;
            });
        }

        /* ---------------------------------------------
         IMAGE AND SOLID AND GRADIENT BACKGROUND
         --------------------------------------------- */
        function backgroundImageInit() {

            $('header, #testimonials').each(function () {
                if ($(this).attr('data-image-bg') && $(this).attr('data-image-overlay')) {

                    $(this).css({
                        'background': 'linear-gradient(' + $(this).data('image-overlay') + ',' + $(this).data('image-overlay') + '), url(' + $(this).data('image-bg') + ') center center / cover no-repeat',
                        'background-position': 'top'
                    });
                }
            });
        }

        /* ---------------------------------------------
         SKILLS BAR INIT
         --------------------------------------------- */
        var skillsSection = "#skills";

        function skillsBarInit() {
            $(window).on('scroll', function () {
                if ($(skillsSection).visible(true)) {
                    counterAnimationInit();
                    skillsBarWidth();
                }
            });
        }

        function skillsBarWidth() {
            $(skillsSection).find('.skills-bar').each(function () {
                $(this).animate({
                    width: $(this).attr('data-percent')
                }, 5000, 'swing');
            });
            skillsBarWidth = function () {
            };
        }

        function counterAnimationInit() {
            $('.counter-numbers').countTo('start');
            counterAnimationInit = function () {
            };
        }

        /* ---------------------------------------------
         TESTIMONIALS
         --------------------------------------------- */
        function testimonialSliderInit() {
            var testimonialsSlider = new Swiper('#testimonials-slider', {
                pagination: '.swiper-pagination-testimonials',
                a11y: true,
                observer: true,
                speed: 1000,
                observeParents: true,
                keyboardControl: true,
                autoHeight: true,
                paginationClickable: true
            });
        }

        /* ---------------------------------------------
         HEADER HEIGHT INIT
         --------------------------------------------- */
        function headerHeightInit() {
            $('header').height($(window)[0].innerHeight);
        }

        /* ---------------------------------------------
         ON RESIZE
         --------------------------------------------- */
        $(window).on('resize', function () {
            headerHeightInit();
        });

        /* ---------------------------------------------
         INITIALIZE FUNCTIONS ON READY
         --------------------------------------------- */
        onScrollCollapse();
        smoothScroll();
        backgroundImageInit();
        headerHeightInit();
        scrollToTOpInit();
        testimonialSliderInit();


      /***ON-LOAD***/
      jQuery(window).on('load', function () {

        /* ---------------------------------------------
         REMOVE PRELOADER
         --------------------------------------------- */
        $("div#pre-loader").addClass('animated fadeOut').delay(200).fadeOut();

        /* ---------------------------------------------
         INITIALIZE FUNCTIONS ON LOAD
         --------------------------------------------- */
        skillsBarInit();
      });
    });
})(jQuery);
