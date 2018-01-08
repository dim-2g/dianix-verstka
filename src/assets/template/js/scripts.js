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

    $('.content table').wrap('<div class="table-adaptive"/>');

    /*
    $('.work__list').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 100
        },
        mainClass: 'mfp-with-zoom',
        gallery: {
            enabled:true
        }
    });
    */

    $(".ceiling-slider").slick({
        dots: false,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        speed: '1000',
        autoplay: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: true,
                    dots: false,
                }
            }
        ]
    });

    //$('.photobox-gallery').photobox('a', { thumbs:false, loop:false });
    //$('.product__list').photobox('a', { thumbs:false, loop:false });
    //setTimeout(window._photobox.history.load, 1000);
    //$('#gallery').photobox('a', { thumbs:true, loop:false });
    /*
    $('.product__list a').fancybox({
        buttons : [
            'zoom',
            'close'
        ]
    });
    $('.work-ceiling__list a').fancybox({
        thumbs : {
            autoStart : true
        },
        buttons : [
            'zoom',
            'close'
        ]
    });*/

    $('.work-ceiling__list').photobox('a', { thumbs:true, loop:false });

    //неполное сворачивание списка
    $('.expand_button').click(function() {
        var id=$(this).data('id');
        if($('#'+id).hasClass('exp')){
            $('#'+id).removeClass('exp');
            $('#'+id).animate({ height: '875px' }, 600);
            $(this). text('Смотреть все образцы');
        }
        else{
            $('#'+id).addClass('exp');
            var h=$('#'+id).css("height", "auto").height();
            $('#'+id).css("height", "875px");
            $('#'+id).animate({ height: h+'px' }, 600);
            $(this). text('Скрыть образцы');

        }
    });




});


!(function(){
    'use strict';
    // finally, initialize photobox on all retrieved images
    $('.photobox-gallery').photobox('a', { thumbs:true, loop:false }, callback);
    // using setTimeout to make sure all images were in the DOM, before the history.load() function is looking them up to match the url hash
    setTimeout(window._photobox.history.load, 1000);
    function callback(){
        console.log('callback for loaded content:', this);
    };

})();



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
$(window).resize(function(){
    //$('title').text($(window).width());
    //$('.header').css({'min-height':0});
});
