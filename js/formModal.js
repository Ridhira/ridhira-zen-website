// Function to display the contact form popup
const isFormSubmitted = localStorage.getItem("offerData");

function showContactForm() {
  let contactForm = document.getElementById("form1");

  if (!isFormSubmitted) {
    contactForm.style.display = "block";
  }
}

setTimeout(showContactForm, 3000);

// Hide Form

const hideForm = () => {
  let contactForm = document.getElementById("form1");
  contactForm.style.display = "none";
};

let offerForm = document.getElementById("offer-form");
let firstName = document.getElementById("offerName");
let email = document.getElementById("offerEmail");
let phone = document.getElementById("offerPhone");
let error = document.getElementById("error");
let submitBtn = document.getElementById("submit");

console.log("phone", phone.value);

offerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  error.innerHTML = "";
  console.log("phone-->", phone.value, firstName.value, email.value);

  if (phone.value.length !== 10) {
    error.innerHTML = "Valid phone number is required ";
  } else {
    let checkboxVal = "Villa";
    let leadStatus = "New Lead";
    let leadSource = "Website";
    let message = "50% Offer";

    submitBtn.innerHTML = "Saving...";

    fetch(
      `https://ridhirazen.com/zohocrmleadcreate.php?phone_number=${phone.value}&first_name=${firstName.value}&last_name=${firstName.value}&email=${email.value}&product=${checkboxVal}&lead_source=${leadSource}&lead_status=${leadStatus}&description=${message}&mobile=${phone.value}`,
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
          localStorage.setItem("offerData", true);
          error.innerHTML =
            "Your form details submitted successfully. Thankyou!! ";
          submitBtn.innerHTML = "Submit";
          error.classList.remove("errorText");
          error.classList.add("success_text");

          firstName.value = "";
          lastName.value = "";
          email.value = "";
          phone.value = "";
        } else if (data.data[0].status === "error") {
          console.log("In Else Block");
          error.innerHTML = data.data[0].message;
          submitBtn.innerHTML = "Submit";
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
