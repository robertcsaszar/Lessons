$(onhtmlloaded);

function onhtmlloaded() {
  
  $('.logout').on('click', function() {
    let userToken = localStorage.getItem("Token");
    $.ajax({
      url: "https://ancient-caverns-16784.herokuapp.com/auth/logout",
      method: "GET",
      headers: {
        'X-Auth-Token': userToken
      },
      statusCode: {
        200: function(response) {
          $("#msg").html("User logged out successfully.");
          checkUser();

        },
        403: function(response) {
          $("#msg").html(response.responseJSON.message);
          checkUser();
        }

      },
      success: function(response) {
        localStorage.clear();
      }
    });

  });
}