$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");

  var movie = new Movie();
  var movieId = getUrlParameter("movieId");
  movie.id = movieId;

  movie.getGameDetails().then(function() {
    displayMovieDetails(movie);
  });

  function displayMovieDetails(movieDetails) {
    console.log("Movie: ", movieDetails)
    // Main Container //
    var mainCont = $("#movie")

    // Create a card for each movie //
    var movieDiv = $("<div></div>").addClass("col-md-12 mt-2 mb-2");
    var movieCard = $("<div></div>").addClass("card");
    var movieCardBlk = $("<div></div>").addClass("card-block p-2");

    // Create a new row for the title //
    var titleRowDiv = $("<div></div>").addClass("row");
    
    var titleCol = $("<div></div>").addClass("col-md-4");

    // Create the title with the results from the api between h4 tags //
    var title = $("<div class='text-center m-2'><h4>" + movieDetails.title + "</h4></div>");

    // Create HR line for title //
    var hrTitle = $("<hr>");

    // Create HR line for buttons //
    var hrDesc = $("<hr>");

    // Create a new row for images and description //
    var rowDesc = $("<div></div>").addClass("row");

    // Create a div for images with class col (collumn) //
    var colDivImg = $("<div></div>").addClass("col-md-6 text-center border-right");
    
    // Create the img tag with the image/poster from the response //
    var img = $(`<img src="` + movieDetails.img + `">`).addClass("m-2");

    // Create a div for description with class col (collumn)
    var colDivDesc = $("<div></div>").addClass("col-md-6");

    // Create the title with Description text between h4 tags //
    var descTitle = $("<h4>Description</h4>").addClass("text-center");

    // Create an ul list //
    var list = $("<ul></ul>").addClass("p-2");
    var type = $("<li><b>Type:</b> " + movieDetails.type + "</li>");
    var genre = $("<li><b>Genre:</b> " + movieDetails.genre + "</li>");
    var lang = $("<li><b>Language:</b> " + movieDetails.language + "</li>");
    var year = $("<li><b>Year:</b> " + movieDetails.year + "</li>");
    var released = $("<li><b>Released:</b> " + movieDetails.released + "</li>");
    var rating = $("<li><b>Rating:</b> " + movieDetails.rating + "</li>");
    var duration = $("<li><b>Duration:</b> " + movieDetails.duration + "</li>");
    var writer = $("<li><b>Writer:</b> " + movieDetails.writer + "</li>");
    var description = $("<li><b>Short Story:</b> " + movieDetails.description + "</li>");
    
    // Create the back button //
    var backBtn = $("<button><i class='fa fa-angle-double-left'></i> Back</button>").addClass("btn btn-primary m-2");
    backBtn.on("click", function(){
      window.location = "../../index.html"
    });
    
    var leftCol = $("<div></div>").addClass("col-md-4")
    var rightCol = $("<div></div>").addClass("col-md-4 d-flex justify-content-end")
    
    // Create edit and delete button //
    var editBtn = $("<button class=''>Edit</button>").addClass("btn btn-primary m-2");
    var delBtn = $("<button class='' id=\"delMovie\">Delete</button>").addClass("btn btn-primary m-2");
    
    delBtn.on("click", function() {
      movie.DeleteMovie(movieId);
    });
    
    console.log("Title: ", movieDetails.title)
    // Add the movie container in the Main container //
    mainCont.append(movieDiv);

    // Add a card for each movie //
    movieDiv.append(movieCard);
    movieCard.append(movieCardBlk);

    // Add the row for title //
    movieCardBlk.append(titleRowDiv);

    // Add the columns in the title row //
    titleRowDiv.append(leftCol);
    titleRowDiv.append(titleCol);
    titleRowDiv.append(rightCol);
    
    // Add the back button in the left column //
    leftCol.append(backBtn);
    
    // Add the title in the middle column //
    titleCol.append(title);
    
    // Add the Edit & Delete btn in the right column //
    rightCol.append(editBtn);
    rightCol.append(delBtn);

    // Add hr under the title //
    movieCardBlk.append(hrTitle);

    // Add a new row for image and desc //
    movieCardBlk.append(rowDesc);

    // Add div with collumn class for image //
    rowDesc.append(colDivImg);

    // Add the image //
    colDivImg.append(img);

    // Create another div with collumn class for desc //
    rowDesc.append(colDivDesc);

    // Add description for each movie //
    colDivDesc.append(descTitle);
    
    // Add HR line under Descriptio
    colDivDesc.append(hrDesc);

    // Create a list with the description for each movie //
    colDivDesc.append(list);
    list.append(type);
    list.append(genre);
    list.append(lang);
    list.append(year);
    list.append(released);
    list.append(rating);
    list.append(duration);
    list.append(writer);
    list.append(description);

  }
  
  
  
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}