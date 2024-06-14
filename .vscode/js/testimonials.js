$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    autoplay: true,
    margin: 30,
    loop: true,
    dots: true,
    nav: false,
    autoplayTimeout: 3500,
    // navText: [
    //   "<i class='fas fa-long-arrow-alt-left'></i>",
    //   "<i class='fas fa-long-arrow-alt-right'></i>",
    // ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
});
