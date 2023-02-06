var ww = $(window).width()
if (ww > 1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('.header .topbar_bg .topbar .depth1>li').on('mouseover mouseout', function(){
    if ( $('html').hasClass('pc') ) {
        $(this).find('.depth2').stop().slideToggle()
    }
})

//----------------------------------------------

$('header .bars').on('click', function () {
    $(this).parents('.header').addClass('on')
})

$('.header .xmark').on('click', function () {
    $(this).parents('.header').removeClass('on')
})

//-------------------------------------------------------------


$('.header .topbar_bg .topbar .depth1 > li > .icon').on('click', function() {
    if ($('html').hasClass('mobile')) {
        if ( $(this).find('i').hasClass('fa-chevron-down') ) {
            $(this).next().stop().slideDown()
            $(this).find('i').removeClass('fa-chevron-down')
            .addClass('fa-chevron-up')
        } else {
            $(this).next().stop().slideUp()
            $(this).find('i').removeClass('fa-chevron-up')
            .addClass('fa-chevron-down')
        }
    }
})

//---------------------------------------------------------------------------

$('.slideimg').slick({
    autoplay : true,
    autoSpeed : 3000,
    arrows : true,
    dots : true,
    prevArrow : '<button class="slick-arrow slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow : '<button class="slick-arrow slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
})