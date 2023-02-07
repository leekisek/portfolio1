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

$('.plpa i').on('click',function(){
    if($(this).hasClass('fa-pause')) {
        $('.slideimg').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slideimg').slick('slickPlay')
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
})

$('.article3 .roomtxt .txt_group').slick({
    autoplay : true,
    dots: true, 
    arrows: false,
    pasueOnHover: true
})


$('.article3 .imgbox2').slick({
    autoplay : true,
    dots: true, 
    arrows: false,
    pasueOnHover: true
})

$('.article3 .slick-dots li').on('click',function(){
    if ('.article3 .slick-dots li:nth-child(1)') {
        $('.article3 .imgbox2').next('roomimg1 rimg').show()
    } else {
        $('.article3 .imgbox2').children().hide()
    }
})

