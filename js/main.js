(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500, "ease");
    return false;
  });

  let scrollToTopBtn = document.getElementById("back-top");
  let rootElement = document.documentElement;
  function scrollToTop() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopBtn.addEventListener("click", scrollToTop);

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  //! Header carousel
  // $(".header-carousel").owlCarousel({
  //   autoplay: true,
  //   smartSpeed: 500,
  //   loop: true,
  //   nav: false,
  //   dots: false,
  //   items: 1,
  // });

  $(".header-carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,

    animateOut: "fadeOut",
  });

  //! Testimonials carousel
  $(".lifestyle-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  //! Facilities carousel
  $(".facilities-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    margin: 50,
    dots: false,
    items: 4,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 4,
      },
    },
  });

  //! functionality carousel
  $(".functionality-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    nav: true,
    margin: 50,
    dots: false,
    items: 4,
    dotsData: false,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      768: {
        items: 3,
        margin: 20,
      },
      1200: {
        items: 4,
      },
    },
  });
})(jQuery);

//! FIRST YOUTUBE MODAL
// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const openModalBtn = document.querySelector(".open_button");
// const closeModalBtn = document.querySelector(".close_button");

// // close modal function
// const closeModal = function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // close the modal when the close button and overlay is clicked
// closeModalBtn.addEventListener("click", closeModal);
// overlay.addEventListener("click", closeModal);

// // close modal when the Esc key is pressed
// document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   }
// });

// // open modal function
// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };
// // open modal event
// openModalBtn.addEventListener("click", openModal);

//! SIDE BAR CONTACT US
$(document).ready(function () {
  $(".toggle").click(function () {
    $(".sidebar-contact").toggleClass("active");
    $(".toggle").toggleClass("active");
  });
});

const controlNavbar = () => {
  let elem = document.getElementById("sidebar");
  if (window.scrollY > 400) {
    elem.classList.remove("hide-sidebar"); // Remove class
  } else {
    elem.classList.add("hide-sidebar"); // Add class
  }
};

window.addEventListener("scroll", controlNavbar);

// @ CONTACT US FORM IN FOOTER
// ! FORM SUBMISSION FOOTER

let loginForm = document.getElementById("user-details");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("description");
  // let plot = document.getElementById("plot");
  // let villa = document.getElementById("villa");
  let error = document.getElementById("error-message");
  let submitBtn = document.getElementById("submit_btn");

  if (phone.value.length !== 10) {
    error.innerHTML = "Valid phone number is required ";
  }
  // else if (plot.checked === false && villa.checked === false) {
  //   error.innerHTML = "*At least one value is required in checkbox";
  // }
  else {
    let checkboxVal = "Villa";
    let leadStatus = "New Lead";
    let leadSource = "Website";
    // if (plot.checked && villa.checked) {
    //   checkboxVal = "Plot and Villa";
    // } else if (plot.checked === false && villa.checked === true) {
    //   checkboxVal = "Villa";
    // } else if (plot.checked === true && villa.checked === false) {
    //   checkboxVal = "Plot";
    // }

    submitBtn.innerHTML = "Processing...";

    fetch(
      `https://ridhirazen.com/zohocrmleadcreate.php?phone_number=${phone.value}&first_name=${firstName.value}&last_name=${lastName.value}&email=${email.value}&product=${checkboxVal}&lead_source=${leadSource}&lead_status=${leadStatus}&description=${message.value}&mobile=${phone.value}`,
      {
        method: "get",
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Data--->", data);
        if (data.data[0].status === "success") {
          error.innerHTML =
            "Your form details submitted successfully. Thankyou!! ";
          submitBtn.innerHTML = "Submit";

          firstName.value = "";
          lastName.value = "";
          email.value = "";
          phone.value = "";
          message.value = "";
          // plot.checked = false;
          // villa.checked = false;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
