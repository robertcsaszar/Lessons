// Prevent the contact form to reload after submit //

document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  var form = document.getElementById("contact");
  
  function handleForm(event) { 
    event.preventDefault(); 
  }
  
  form.addEventListener('submit', handleForm);
}

// Changed the required input to true //
// If the inputs are empty, a message will be displayed and the border become red //
function requiredData() {
    document.getElementById("firstName").required = true;
    document.getElementById("lastName").required = true;
    document.getElementById("message").required = true;
}

// Validate the data from inputs //
// "Thank you for contacting us" will be displayed //
// If everything is ok, all the info will be displayed in console //
function validData() {
  var fname = document.getElementById("firstName");
  var lname = document.getElementById("lastName");
  var gender = document.forms.contact.gender;
  var message = document.getElementById("message");
  var successContainer = document.getElementById("successItem");
  var successItem = document.createElement("section");
  
  document.getElementById("successContainer").style.display = "initial";
  successItem.innerHTML = "<span> Thank you for contacting us," + " " + fname.value + "!</span>"
  successItem.className = "fa fa-check-circle"
  
  successContainer.appendChild(successItem);
  
  console.log("First Name:", fname.value);
  console.log("Last Name:", lname.value); 
  console.log("Gender:", gender.value); 
  console.log("Message:", message.value); 
}





