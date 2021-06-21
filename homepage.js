$(document).ready(function () {
  $(".homepage-main-container .cta-scroll-logos .logo-container .logo-list").owlCarousel({
    loop: true,
    nav: false,
    
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    lazyLoad: true,
    responsive: {
      0: {
        items: 1,
        stagePadding: 0,
        margin: 00,
      },
      768: {
        items: 2,
        stagePadding: 0,
        margin: 00,
      },
      992: {
        items: 3,
        stagePadding: 0,
        margin: 0,
      },
      1200: {
        items: 4,
        margin: 00,
      },
    },
  });
    $('#program-carousel').on('slid.bs.carousel', function () {
      $('#program-carousel .mobile-indicator').html($('#program-carousel .carousel-indicators .active.indicator').text());
    })
});
