// Prevent the contact form to reload after submit //

$(onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  var form = $("#contact");
  
  function handleForm(event) { 
    event.preventDefault(); 
  }
  
  $("form").on('submit', handleForm);
}

// Changed the required input to true //
// If the inputs are empty, a message will be displayed and the border become red //
function requiredData() {
    $("#firstName").attr("required", "true");
    $("#lastName").attr("required", "true");
    $("#message").attr("required", "true");
}

// Validate the data from inputs //
// "Thank you for contacting us" will be displayed //
// If everything is ok, all the info will be displayed in console //
function validData() {
  var fname = $("#firstName");
  var lname = $("#lastName");
  var gender =$("#gender input[type='radio']:checked");
  var message = $("#message");
  var successContainer = $("#successItem");
  var successItem = document.createElement("section");
  
  $("#successContainer").css("display", "initial");
  $(successItem).html("<span> Thank you for contacting us," + " " + fname.val() + "!</span>");
  $(successItem).addClass("fa fa-check-circle");
  
  $(successContainer).append(successItem);
  
  console.log("First Name:", fname.val());
  console.log("Last Name:", lname.val()); 
  console.log("Gender:", gender.val()); 
  console.log("Message:", message.val()); 
}





