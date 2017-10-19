var body = document.querySelector('body');

function isMobile() {
    if (window.innerWidth < 767) {
        return true;
    } else {
        return false;
    }
}

function isTablet() {
    if (window.innerWidth < 1024) {
        return true;
    } else {
        return false;
    }
}

function appearingTexts() {

    var introTexts = document.querySelectorAll('#intro [style="opacity: 0; transform:translateY(-20px);"]');
    var timerIntro = 200;
    var aboutAppSec = document.querySelector('#about-app');
    var texts = document.querySelectorAll('#about-app [style="opacity: 0; transform:translateY(-20px);"]');
    var timer = 200;

    var pricingSec = document.querySelector('#pricing');
    var textsPricing = document.querySelectorAll('#pricing [style="opacity: 0; transform: translateY(-10%);"]');
    var timerPricing = 200;

    var aboutUsSec = document.querySelector('#about-us');
    var aboutUsEls = document.querySelectorAll('#about-us [style="opacity: 0; transform:translateY(-20px);"]');
    var timerAboutUs = 200;

    var limit = window.innerHeight / 4;

    // for (let i = 0; i < introTexts.length; i++) {
    //     setTimeout(function(){
    //         introTexts[i].style.opacity = 1;
    //         introTexts[i].style.transform = 'none';
    //     }, timerIntro);
    //     timerIntro += 200;
    // }

    window.addEventListener('scroll', function(){

        if (body.scrollTop >= (aboutAppSec.offsetTop - limit)) {
            for (var i = 0; i < texts.length; i++) {
                setTimeout(function(){
                    texts[i].style.opacity = 1;
                    texts[i].style.transform = 'none';
                }, timer);
                timer += 200;
            }
        }

        if (body.scrollTop >= (pricingSec.offsetTop - 200)) {
            for (var i = 0; i < textsPricing.length; i++) {
                setTimeout(function(){
                    textsPricing[i].style.transform = 'none';
                    textsPricing[i].style.opacity = 1;
                }, timerPricing);
                timerPricing += 200;
            }

            setTimeout(function() {
                pricingSec.classList.remove('off');
            }, 1000);
        }

        if (body.scrollTop >= (aboutUsSec.offsetTop - 200)) {
            for (var i = 0; i < aboutUsEls.length; i++) {
                setTimeout(function(){
                    aboutUsEls[i].style.transform = 'none';
                    aboutUsEls[i].style.opacity = 1;
                }, timerAboutUs);
                timerAboutUs += 200;
            }
        }
    });
}

function stickyHeader() {
    var header = document.querySelector('header');
    var currentScroll = body.scrollTop;

    window.addEventListener('scroll', function(){

        if (currentScroll == 0 || body.scrollTop > currentScroll || body.scrollTop == 0) {
            header.classList.remove('sticky');
        } else {
            header.classList.add('sticky');
        }

        currentScroll = body.scrollTop;
    });
}

// function carouselPricing() {
//     var active = 1;
//     var els = document.querySelectorAll('.pricing-el');
//     var dots = document.querySelectorAll('.carousel-dots .dot');
//
//     var limit = dots.length -1;
//
//     window.addEventListener('click', function() {
//         els[active].classList.remove('active');
//         dots[active].classList.remove('active');
//
//         if (active == limit) {
//             active = 0;
//         } else {
//             active = active + 1;
//         }
//
//         els[active].classList.add('active');
//         dots[active].classList.add('active');
//     });
// }
