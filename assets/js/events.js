const dots = document.querySelectorAll('.carousel-dots .dot');

let index = 1;

appearingTexts();

stickyHeader();

// activeMenu();

// carouselPricing();

// introAppPreview();

var pricingScroll = new SmoothScroll('[href="#pricing"]', {easing: 'linear'});
var aboutAppScroll = new SmoothScroll('[href="#about-app"]', {easing: 'linear'});
var aboutUsScroll = new SmoothScroll('[href="#about-us"]', {easing: 'linear'});

if (isTablet()) {

    new Siema({
      selector: '#pricing .pricing-els',
      easing: 'ease-out',
      loop: true,
      perPage: 1,
      startIndex: 1,
      draggable: true,
      onChange: handleDotsCarousel,
    });

    function handleDotsCarousel() {
        dots[index].classList.remove('active');
        index = this.currentSlide;
        dots[index].classList.add('active');
    }
}
