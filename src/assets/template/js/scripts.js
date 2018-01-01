$(function() {
    var slider__main = $(".bxslider_glav");
    slider__main.slick({
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: '1000',
        autoplay: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    dots: true,
                }
            }
        ]
    });
    setHeightHeader = function(){
        var header_height = $('.header').outerHeight();
        $('.header').css({'min-height':header_height});
    }

    setHeightHeader();

    $('.search-mobile').click(function(){
        $('body').toggleClass('search');
        return false;
    });

    $(".toogle-mobile-menu").magnificPopup({
        type: "inline",
        midClick: true,
        mainClass: 'mobile_menu_bg'
    });




});

setFixedHeader = function(){
    if ($(window).width()<768) {
        $('body').removeClass('fixed-header');
        return;
    }
    var header = $('.header__body');
    var header_relative = $('.header__body').not('.slideTop');

    if (header_relative.length>0){
        relative_bottom = header_relative.offset().top + header_relative.outerHeight();
        relative_top = header_relative.offset().top;
    }else{
        if (!relative_bottom){
            relative_bottom = 0;
        }
        if (!relative_top){
            relative_top = 0;
        }
    }
    var scroll = $(window).scrollTop();
    if (relative_bottom<scroll) {
        header.addClass('slideTop');
        setTimeout(function(){
            $('body').addClass('fixed-header');
        });
    }
    if (relative_top>=scroll) {
        $('body').removeClass('fixed-header');
        header.removeClass('slideTop');
    }
};

$(document).scroll(function(){
    setFixedHeader();
});

