
// introAni


$(window).on('load', function(){
    
    if (!sessionStorage.getItem('refresh') ) {
        sessionStorage.setItem('refresh', 'yes')
        $('.introAni').addClass('on')
        let count = 0;
        let timer = setInterval(add, 25)
        function add() {
            count++
            if (count>=100) { 
                clearInterval(timer) 
                $('.introAni').animate({
                    left:'-100%;'
                }, 500, function(){
                    $(this).removeClass('on')
                })
            }
            $('.introAni div').eq(1).text(count+'%')
        }
    } 

    let objString = localStorage.getItem('objkey')
    if ( objString ) {
        const obj = JSON.parse(objString) 
        if (Date.now()>obj.expire) {
            $('.popup').addClass('on')
            localStorage.removeItem('objkey')
        } else {
            $('.popup').removeClass('on')
        }
    } else {
        $('.popup').addClass('on')
    }
})





//--------------------------------------------

var deviceSize = 1024
function scrollOX(status) {
    $('html').css({

        overflowY: status
    })

    return $('html').width()
}

// 토글디바이스툴바가 꺼져 있으면 스크롤바 유무에 따라 html의 넓이가 다르므로
// 스크롤바 넓이 17px을 deviceSize에서 빼야 함

var scX = scrollOX('hidden')
var scO = scrollOX('scroll')
var scD = scX - scO

// 토글 디바이스툴바가 켜져 있으면 scX와 scO는 같은 값이 되므로
// 아래 if 문을 들어가지 않아서 diviceSize는 원래 값임.

if (scD > 0) {

    deviceSize = deviceSize - scD

}

// pc화면용 네비게이션 액션



// $('#header #nav .depth1 > li').on('hover', function () {
//     if ($('html').hasClass('pc')) {
//         $(this).find('.depth2').stop().slideToggle()
//     }
// })


// $('#header #nav .depth1 > li').on('mouseover mouseout', function () {
//     if ($('html').hasClass('pc')) {
//         $(this).find('.depth2').stop().slideToggle()
//     }
// })

// function init() {

//     $(window).on('resize', function () {
//         let ww = $(this).width()
//         if (ww > deviceSize) {
//             $('html').addClass('pc')
//         } else {
//             $('html').addClass('mobile')
//         }
//     })

// }

// init()

// $(window).on('resize', function () {
//     let ww = $(this).width()
//     if (ww > deviceSize) {
//         $('html').addClass('pc').removeClass('mobile')
//     } else {
//         $('html').addClass('mobile').removeClass('pc')
//     }
// })

// $(window).on('resize',function(){
//     init()
// })


var ww = $(window).width()
if (ww > deviceSize) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$(window).on('resize', function () {
    let ww = $(window).width()
    if (ww > deviceSize && !$('html').hasClass('pc')) {
        $('html').addClass('pc').removeClass('mobile')
        location.reload()
    } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
        $('html').addClass('mobile').removeClass('pc')
        location.reload()
    }
})


// $(window).on('resize', function () {
//     let ww = $(window).width()
//     if (ww > deviceSize && !$('html').hasClass('pc')) {
//         $('html').addClass('pc').removeClass('mobile')
//         location.reload()
//     } else if (ww <= deviceSize && !$('html').hasClass('mobile')) {
//         $('html').addClass('mobile').removeClass('pc')
//         location.reload()
//     }
// })

var ww = $(window).width()
if (ww > 1024) {
    $('html').addClass('pc')
} else {
    $('html').addClass('mobile')
}

$('#container .header .wrap .depth1>li').on('mouseover mouseout', function () {
    if ($('html').hasClass('pc')) {
        $(this).find('.depth2').stop().slideToggle()
    }
})

// $('.header .topbar_bg .tobar .depth1 > li').on('mouseover', function(){
//     if ( $('html').hasClass('pc') ) {
//         $(this).find('.depth2').stop().slideDown()
//     }
// })

// $('.header .topbar_bg .tobar .depth1 > li').on('mouseout', function(){
//     if ( $('html').hasClass('pc') ) {
//         $(this).find('.depth2').stop().slideUp()
//     }
// })


//----------------------------------------------

$('header .bars').on('click', function () {
    $(this).parents('.header').addClass('on')
})

$('.header .xmark').on('click', function () {
    $(this).parents('.header').removeClass('on')
})

//-------------------------------------------------------------


$('.header .topbar_bg .topbar .depth1 > li > .icon').on('click', function () {
    if ($('html').hasClass('mobile')) {
        if ($(this).find('i').hasClass('fa-chevron-down')) {
            $(this).next().stop().slideDown()
            $(this).find('i').removeClass('fa-chevron-down')
                .addClass('fa-chevron-up')
        } else {
            $(this).next().stop().slideUp()
            $(this).find('i').removeClass('fa-chevron-up')
                .addClass('fa-chevron-down')
        }
    }


    $(this).parent().siblings().find('.depth2').slideUp()
    $(this).parent().siblings().find('i').removeClass('fa-chevron-up')
        .addClass('fa-chevron-down')
})

//---------------------------------------------------------------------------

$('.slideimg').slick({
    autoplay: true,
    autoSpeed: 3000,
    arrows: true,
    dots: true,
    prevArrow: '<button class="slick-arrow slick-prev"><i class="fa-solid fa-chevron-left"></i></button>',
    nextArrow: '<button class="slick-arrow slick-next"><i class="fa-solid fa-chevron-right"></i></button>',
    pauseOnFoucus : false
})


$('.plpa i').on('click', function () {
    if ($(this).hasClass('fa-pause')) {
        $('.slideimg').slick('slickPause')
        $(this).removeClass('fa-pause').addClass('fa-play')
    } else {
        $('.slideimg').slick('slickPlay')
        $(this).removeClass('fa-play').addClass('fa-pause')
    }
})
// ================================== Slick


$('.article3 .row').slick({
    autoplay: true,
    dots: true,
    arrows: false,
    pasueOnHover: true,
    pauseOnFoucus : false
})

// $('.article3 .slick-dots li').on('click',function(){
//     if ('.article3 .slick-dots li:nth-child(1)') {
//         $('.article3 .imgbox2').next('roomimg1 rimg').show()
//     }} )

//------------------------------------------------------------------

let article1Near = $('.article1').offset().top - $(window).height() / 1.5
let article2Near = $('.article2').offset().top - $(window).height() / 1.5
let article3Near = $('.article3').offset().top - $(window).height() / 2
let article4Near = $('.article4').offset().top - $(window).height() / 2
let article5Near = $('.article5').offset().top - $(window).height() / 1.7


$(window).on('scroll', function () {
    let sct = $(this).scrollTop()
    if (sct >= article1Near) {
        $('.article1').addClass('on')
    } else {
        $('.article1').removeClass('on')
    }

    if (sct >= article2Near) {
        $('.article2').addClass('on')
    } else {
        $('.article2').removeClass('on')
    }

    if (sct >= article3Near) {
        $('.article3').addClass('on')
    } else {
        $('.article3').removeClass('on')
    }

    if (sct >= article4Near) {
        $('.article4').addClass('on')
    } else {
        $('.article4').removeClass('on')
    }


    if (sct >= article5Near) {
        $('.article5').addClass('on')
    } else {
        $('.article5').removeClass('on')
    }
})

$('.close button').on('click', function(){
    if($(this).prev().prop('checked')) {
        let tts = Date.now() + 1000
        const obj = {
            check : 'yes',
            expire :tts
        }
        localStorage.setItem('objkey', JSON.stringify(obj))
    }
    $('.popup').removeClass('on')
})

/* article5 구역 모달창에서 크게 보기 */

$('.article5 .gimgbox .img111 img').on('click', function(){
    // let href = $(this).attr('href')
    let src = $(this).attr('src')
    let modal = `<div class="modal">`
    modal += `<div class="imgbox">`
    // modal += `<a href="${href}" target="_blank">` 
    modal += `<img src="${src}" alt="">`
    modal += `<button type="button">닫기</button>`
    modal += `</div>`
    modal += `</div>`
    $('body').append(modal)
    $('.modal').css({
        position:'fixed',
        top:0,
        left:0,
        width:'100%',
        height:'100%',
        background:'rgba(0,0,0,0.5)'
    })
    $('.modal .imgbox').css({
        position:'absolute',
        width:'700px',
        top:'50%',
        left:'50%',
        transform:'translate(-50%, -50%)'
    })
    $('.modal .imgbox button').css({
        position:'absolute',
        top:'0',
        right:'0',
        background:'rgba(0,0,0,0.5)',
        color:'#fff',
        padding:'5px 10px'
    })

    return false

})

$('body').on('click','.modal button', function(){
    $('.modal').hide()
    return false;
})


// $('body').on('click', '.modal img', function(e){
//     e.stopPropagation()
// })