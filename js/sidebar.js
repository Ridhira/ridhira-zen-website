//! SIDE BAR CONTACT US
// $(document).ready(function () {
//   $(".toggle").click(function () {
//     $(".sidebar-contact").toggleClass("active");
//     $(".toggle").toggleClass("active");
//   });
// });

// ! FORM SUBMISSION SIDE BAR
let getInTouchForm = document.getElementById("get-in-touch");

getInTouchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("userEmail");
  let phone = document.getElementById("userPhone");
  let message = document.getElementById("message");
  // let plot = document.getElementById("plot-1");
  // let villa = document.getElementById("villa-1");
  let error = document.getElementById("errorMessage");
  let submitBtn = document.getElementById("submitBtn");

  console.log(plot.checked, villa.checked);

  if (phone.value.length !== 10) {
    error.innerHTML = "*Valid phone number is required ";
  }
  //  else if (plot.checked === false && villa.checked === false) {
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
        } else if (data.data[0].status === "error") {
          console.log("In Else Block");
          error.innerHTML = "Something went wrong. Please Try Again!!";
          submitBtn.innerHTML = "Submit";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
