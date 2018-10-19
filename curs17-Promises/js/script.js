$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
  
  var btn = $("#loading");
  var btn2 = $("#postButton");

  btn.on("click", function() {
    $("#spinner").css("visibility", "visible")
    
    getName(function(fullName) {
      $("#spinner").css("visibility", "hidden")
      $(".content").html("My name is " + fullName)
    })
  })
  
  btn2.on("click", getPosts)
  
  function getPosts() {
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    })
    .then(function(response) {
      console.log("Response", response)
    })
  }
  
}

