let userForm = document.getElementById("user-details");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let firstName = document.getElementById("first-name");
  let lastName = document.getElementById("last-name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let message = document.getElementById("description");
  let plot = document.getElementById("plot");
  let villa = document.getElementById("villa");
  let error = document.getElementById("error-message");
  let submitBtn = document.getElementById("submit_btn");

  console.log(plot.checked, villa.checked, firstName.value);

  if (phone.value.length !== 10) {
    error.innerHTML = "*Valid phone number is required ";
  } else if (plot.checked === false && villa.checked === false) {
    error.innerHTML = "*At least one value is required in checkbox";
  } else {
    let checkboxVal;
    let leadStatus = "New Lead";
    if (plot.checked && villa.checked) {
      checkboxVal = "Plot and Villa";
    } else if (plot.checked === false && villa.checked === true) {
      checkboxVal = "Villa";
    } else if (plot.checked === true && villa.checked === false) {
      checkboxVal = "Plot";
    }

    console.log(
      `${firstName.value}, ${lastName.value}, ${email.value}, ${phone.value}, ${message.value}, ${checkboxVal}`
    );

    submitBtn.innerHTML = "Processing...";

    fetch(
      `https://ridhirazen.com/zohocrmleadcreate.php?phone_number=${phone.value}&first_name=${firstName.value}&last_name=${lastName.value}&email=${email.value}&product=${checkboxVal}&lead_status=${leadStatus}&description=${message.value}&mobile=${phone.value}`,
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
          plot.checked = false;
          villa.checked = false;
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
});
