 (function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/
  

    /*================================
    Adding Class
    ==================================*/
    $('.hero-content .link i').on('click', function () {
        $('.hero-content .link .number').toggleClass('active');
    })
     $('html').smoothScroll(900);
    /*================================
    Owl Carousel
    ==================================*/
    function tst_carousel() {
        $('.tst-carousel').owlCarousel({
            margin: 0,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav:false,
//            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
        });
    }
    tst_carousel();


    function abt_carousel() {
        $('.abt-carousel').owlCarousel({
            margin: 0,
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            dots: true
        });
    }
    abt_carousel();

    function client_list() {
        $('.client-list').owlCarousel({
            margin: 100,
            items: 5,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            nav: false,
            responsive: {
                0: {
                    items: 2,
                    margin: 20
                },
                480: {
                    items: 3,
                    margin: 30
                },
                768: {
                    items: 5,
                    margin: 50
                }
            }

        });
    }
    client_list();


    /*================================
    Magnific Popup
    ==================================*/
    $('.expand-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.expand-video').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled: true
        }

    });

    /*================================
    slicknav
    ==================================*/
    $('ul#navigation').slicknav({
        prependTo: "#mobile_menu"
    });


    /*================================
    Masonary
    ==================================*/
    $('#container').imagesLoaded(function() {

        // filter items on button click
        $('.portfolio-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // init Isotope
        var $grid = $('.portfolio-masonary').isotope({
            itemSelector: '.prt-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.prt-item',
            }
        });
    });

    $('.portfolio-menu button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*================================
    Smoth Scroll
    ==================================*/
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }


    var hedaerHeight = $('.header-area').innerHeight();

    $(window).on("load", function() {
        smoothScrolling($("#nav_mobile_menu ul li a[href^='#']"), hedaerHeight);
    });

    /*================================
    Active current Li
    ==================================*/
    $(window).on("scroll", function() {
        activeMenuItem($("#nav_mobile_menu"));
    });

    //function for active menuitem
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }


})(jQuery);
