$(domLoaded)

function domLoaded() {
  console.log("Dom loaded")

  // Quotes API //
  
  var apiUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes/"
  var btn = $("#get-quote");
  var btn2 = $("#get-quotes");

  btn.on("click", loadQuote);
  btn2.on("click", loadQuotes);

  // Request to post 1 Quote //
  function loadQuote() {
    var quoteContainer = $("#quoteContainer");
    $.ajax({
      url: apiUrl,
      success: function(data) {
        var quote = "<h4>Quote: " + data + "</h4>"
        quoteContainer.append(quote)
      }
    });
  }

  // Request to post more Quotes - the ammount is choosed by the user //
  function loadQuotes() {
    var quoteContainer = $("#quotesContainer");
    var id = $("[name=quote]").val();
    $.ajax({
      url: apiUrl + id,
      success: function(data) {
        for (var i = 0; i < data.length; i++) {
          var quote = "<h4>Quote: " + data[i] + "</h4>"
          quoteContainer.append(quote)
        }
      }
    })
  }
  
  
  // CRUD POSTS API //
  
  var apiUrl2 = "https://jsonplaceholder.typicode.com/posts/";
  var btnPost = $("#get-title");
  var btnPosts = $("#get-titles");
  var btnUpdate = $("#updatePost");
  var btnCreate = $("#createPost");
  var btnDelete = $("#deletePost");
  
  btnPost.on("click", displayTitle);
  btnPosts.on("click", displayTitles);
  btnUpdate.on("click", updatePost);
  btnCreate.on("click", createPost);
  btnDelete.on("click", deletePost);
  
  // Get all titles //
  function displayTitles() {
    var titleContainer = $("#displayAllContainer");
    $.ajax ({
      url: apiUrl2,
      success: function(response) {
        for(var j = 0; j < response.length; j++) {
          var title = "<h4>Title: " + response[j].title + "</h4>"
          titleContainer.append(title)
        }
      }
    })
  }
  
  // Get a specific title by id //
  function displayTitle() {
    var id  = $("[name=titles]").val();
    var titleContainer = $("#displayContainer");
    $.ajax({
      url: apiUrl2 + id,
      success: function(response) {
        var title = "<h3>Title: " + response.title + "</h3>";
        titleContainer.append(title);
      }
    })
  }
  
  // Request to DELETE a post //
  function deletePost() {
    var id = $("[name=deletePost]").val();
    var titleContainer = $("#deleteContainer");
    $.ajax({
      url: apiUrl2 + id,
      method: "DELETE",
      success: function(response) {
        var deletedTitle = "<h4>" + "Post "+ id + " deleted successfully" + "</h4>";
        titleContainer.append(deletedTitle);
      }
    })
  }
  
  // Request to UPDATE a post //
  function updatePost() {
    var id = $("[name=titleID]").val();
    var title = $("[name=updateTitle]").val();
    var bodyText = $("[name=textarea]").val();
    var userID = Math.floor(Math.random() * 2);
    var updateConfirmation = $("#updateContainer");
    $.ajax ({
      url: apiUrl2 + id,
      method: "PUT",
      data: {
        title: title,
        body: bodyText,
        userId: userID
      },
      success: function(response){
        var update = "<h4>" + "Post " + id + " updated successfully" + "</h4>"
        updateConfirmation.append(update)
        console.log("Post successfully updated " , response);
        console.log("Post successfully updated " , response.id);
      }
    })
  }
  
  // Request to CREATE a post //
  function createPost() {
    var title = $("[name=createPost]").val();
    var bodyText = $("[name=createTextarea]").val();
    var userID = Math.floor(Math.random() * 2);
    var updateConfirmation = $("#createContainer");
    $.ajax ({
      url: apiUrl2,
      method: "POST",
      data: {
        title: title,
        body: bodyText,
        userId: userID
      },
      success: function(response){
        var create = "<h4>Post created successfully!</h4>"
        updateConfirmation.append(create)
        console.log("Post successfully updated " , response);
        console.log("Post successfully updated " , response.id);
      }
    })
  }

}