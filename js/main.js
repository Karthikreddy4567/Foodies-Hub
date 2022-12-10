jQuery(document).ready(function($) {

    'use strict';

    var owl = $("#owl-breakfast");

    owl.owlCarousel({

        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false

    });


    var owl2 = $("#owl-lunch");

    owl2.owlCarousel({

        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false

    });


    var owl3 = $("#owl-dinner");

    owl3.owlCarousel({

        pagination: true,
        paginationNumbers: false,
        autoPlay: 6000,
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [900, 2],
        itemsTablet: [600, 1],
        itemsMobile: false

    });


    var top_header = $('.parallax-content');
    top_header.css({ 'background-position': 'center center' });

    $(window).scroll(function() {
        var st = $(this).scrollTop();
        top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
    });


    $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
                countNum: countTo
            },

            {

                duration: 8000,
                easing: 'linear',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);

                }

            });

    });


    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e) {
        e.preventDefault();
        var $this = $(this),
            tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();

    })



    $(".pop-button").click(function() {
        $(".pop").fadeIn(300);

    });

    $(".pop > span").click(function() {
        $(".pop").fadeOut(300);
    });


    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".header").addClass("active");
        } else {

            $(".header").removeClass("active");
        }
    });


    /************** Mixitup (Filter Projects) *********************/
    $('.projects-holder').mixitup({
        effects: ['fade', 'grayscale'],
        easing: 'snap',
        transitionSpeed: 400
    });



});