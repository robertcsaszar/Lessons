$(domLoaded)


function domLoaded() {
  
  var registerBtn = $(".registerBtn");

  registerBtn.on("click", registerModal);
  
  function registerModal() {
    // Create Modal Container //
    var container = $("<div id='registerModal'></div>").addClass("modal fade");
    var containerAlign = $("<div></div>").addClass("modal-dialog modal-dialog-centered");

    // Create the content inside the modal //
    var content = $("<div></div>").addClass("modal-content");

    // Create modal header with Image //
    var header = $("<div></div>").addClass("modal-header");
    var image = $("<img src='https://image.ibb.co/jqj97K/open.jpg' alt='Register Image' >").addClass("img-fluid");
    
    // Create modal body //
    var body = $("<div></div>").addClass("modal-body");

    // Create form //
    var form = $("<form></form>");
    var formGroupUser = $("<div></div>").addClass("form-group")
    var formGroupPass = $("<div></div>").addClass("form-group")
    var formGroupName = $("<div></div>").addClass("form-group")
    var formGroupMail = $("<div></div>").addClass("form-group")

    // Create Inputs //
    var fullname = $("<input type='text' id='nameReg' placeholder='Full Name'>").addClass("form-control");
    var emailAddress = $("<input type='email' id='emailReg' placeholder='Email Address'>").addClass("form-control");
    var userName = $("<input type='text' id='userReg' placeholder='Username'>").addClass("form-control");
    var password = $("<input type='password' id='passReg' placeholder='Password'>").addClass("form-control");

    // Create modal footer //
    var footer = $("<div></div>").addClass("modal-footer");

    // Create Login button //
    var registerButton = $("<button type='submit' id='btn-register' data-toggle='modal' data-target='#confirm' data-dismiss='modal''>Sign Up</button>").addClass("btn btn-danger");

    $('body').append(container);

    // Setup the modal // 
    container.append(containerAlign);
    containerAlign.append(content);

    // Add modal header //
    content.append(header);

    // Add image in header //
    header.append(image);

    // Add modal body //
    content.append(body);

    // Add form in body //
    body.append(form);

    // Setup name form //
    form.append(formGroupName)
    
    //Add the name input //
    formGroupName.append(fullname);
    
    // Setup the form //
    form.append(formGroupUser);
    
    // Add the username input in form group//
    formGroupUser.append(userName);

    // Add form group for password input //
    form.append(formGroupPass);
    
    // Add the password input in the form group //
    formGroupPass.append(password);
    
    // Setup E-Mail form //
    form.append(formGroupMail)
    
    // Add the e-mail address input //
    formGroupMail.append(emailAddress);
    
    // Add modal footer //
    content.append(footer);

    // Setup Footer //
    footer.append(registerButton);

    function registerUser(event) {
      event.preventDefault()
      var name = $("#nameReg").val();
      var user = $("#userReg").val();
      var password = $("#passReg").val();
      var email = $("#emailReg").val();

      $.ajax({
        url: "https://ancient-caverns-16784.herokuapp.com/auth/register",
        method: "POST",
        data: {
          name: name,
          username: user,
          password: password,
          email: email
        },
        statusCode: {
          200: function (response) {
            $("#msg").html("You have successfully registered and logged in.")
          },
          409: function (response) {
            $("#msg").html(response.responseJSON.message)
          }
        },
        success: function(response) {
          localStorage.setItem("Token", response.accessToken);
          localStorage.setItem("Auth", response.authenticated);
          localStorage.setItem("Name", name);
          checkUser();
        }
      });
    }
    registerButton.on("click", registerUser);
  }
}