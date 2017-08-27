var body = document.querySelector('body');

function appearingTexts() {

    var introTexts = document.querySelectorAll('#intro [style="opacity: 0; transform:translateY(-20px);"]');
    var timerIntro = 200;
    var aboutAppSec = document.querySelector('#about-app');
    var texts = document.querySelectorAll('#about-app .block-content .content');
    var timer = 200;

    var pricingSec = document.querySelector('#pricing');
    var textsPricing = document.querySelectorAll('#pricing [style="opacity: 0; transform: translateY(-10%);"]');
    var timerPricing = 200;
    var limit = window.innerHeight / 4;

    console.log(aboutAppSec.offsetTop - limit);

    for (let i = 0; i < introTexts.length; i++) {
        setTimeout(function(){
            introTexts[i].style.opacity = 1;
            introTexts[i].style.transform = 'none';
        }, timerIntro);
        timerIntro += 200;
    }

    window.addEventListener('scroll', function(){

        if (body.scrollTop >= (aboutAppSec.offsetTop - limit)) {
            for (let i = 0; i < texts.length; i++) {
                setTimeout(function(){
                    texts[i].style.opacity = 1;
                    texts[i].style.transform = 'none';
                }, timer);
                timer += 200;
            }
        }

        if (body.scrollTop >= (pricingSec.offsetTop - 200)) {
            for (let i = 0; i < texts.length; i++) {
                setTimeout(function(){
                    textsPricing[i].style.transform = 'none';
                    textsPricing[i].style.opacity = 1;
                }, timerPricing);
                timerPricing += 200;
                console.log(timerPricing);
            }

            setTimeout(function() {
                pricingSec.classList.remove('off');
            }, 1000);
        }
    });
}

function introAppPreview() {
    // console.log('kikoo');
    var rotateValue = 0;
    var buildCss;
    var preview = document.querySelector('#preview');
    var section = document.querySelector('#intro');

    window.addEventListener('mouseover', function(e) {
        // console.log(section.getBoundingClientRect());

        // console.log(e.clientX / 20, e.clientY / 20);
        buildCss = 'translate(' + Math.round(e.clientX / 10) +'px,' + Math.round(e.clientY / 10) + 'px)';

        // buildCss = 'translate3d(' + Math.round(e.screenX / 30)+ 'px,' + Math.round(e.screenY / 10) + 'px,' + Math.round(e.screenY / 10) +'px)';
        // console.log('translate3d(' + Math.round(e.screenX / 30)+ 'px,' + Math.round(e.screenY / 10) + 'px,' + (e.screenY / 10) +'px)');
        // // console.log(buildCss);
        preview.style.transform = buildCss;
    });

    // window.addEventListener('scroll', function(){
    //     console.log(section.getBoundingClientRect());
    // });
}
