$(".villa-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  loop: true,
  nav: true,
  dots: false,
  items: 1,
  dotsData: false,
  navText: [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>',
  ],
});

// ! 1 BHK CAROUSEL
const img1 = document.getElementById("carousel_image1");
const rightBtn1 = document.getElementById("right_btn1");
const leftBtn1 = document.getElementById("left_btn1");

// Images are from unsplash
let pictures1 = [
  "/img/Villas/Images/villa-image-1bhk-2.jpg",
  "/img/Villas/Images/villa-image-1bhk-3.jpg",
];

img1.src = pictures1[0];
let position = 0;

const moveRight = () => {
  if (position >= pictures1.length - 1) {
    position = 0;
    img1.src = pictures1[position];
    return;
  }
  img1.src = pictures1[position + 1];
  position++;
};

const moveLeft = () => {
  if (position < 1) {
    position = pictures1.length - 1;
    img1.src = pictures1[position];
    return;
  }
  img1.src = pictures1[position - 1];
  position--;
};

rightBtn1.addEventListener("click", moveRight);
leftBtn1.addEventListener("click", moveLeft);
