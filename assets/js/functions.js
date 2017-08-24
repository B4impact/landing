var body = document.querySelector('body');

function appearingTexts() {
    var aboutAppSec = document.querySelector('#about-app');
    var texts = document.querySelectorAll('#about-app .block-content .content');
    var timer = 200;

    var pricingSec = document.querySelector('#pricing');
    console.log(pricingSec.offsetTop);
    var textsPricing = document.querySelectorAll('#pricing .pricing-el');
    var timerPricing = 200;

    window.addEventListener('scroll', function(){
        console.log(body.scrollTop);

        if (body.scrollTop >= (aboutAppSec.offsetTop - 200)) {
            for (let i = 0; i < texts.length; i++) {
                setTimeout(function(){
                    texts[i].style.opacity = 1;
                }, timer);
                timer += 200;
            }
        }

        if (body.scrollTop >= (pricingSec.offsetTop - 200)) {
            for (let i = 0; i < texts.length; i++) {
                setTimeout(function(){
                    textsPricing[i].style.opacity = 1;
                }, timerPricing);
                timerPricing += 200;
            }
        }
    });
}

function introAppPreview() {
    console.log('kikoo');
    var rotateValue = 30;
    var preview = document.querySelector('#preview');
    var section = document.querySelector('#intro');

    window.addEventListener('mouseover', function(e) {
        // console.log(section.getBoundingClientRect());
        rotateValue = e.screenX / 10;
        preview.style.transform = 'rotate(' +  rotateValue + 'deg)';
    });

    // window.addEventListener('scroll', function(){
    //     console.log(section.getBoundingClientRect());
    // });
}
