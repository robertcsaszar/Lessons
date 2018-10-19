$(domLoaded)

function domLoaded() {

  // Side Bar functionaity //
  $('#sidebarCollapse').on('click', function() {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
}

var populate =  function() {
  $.ajax({
    url: "https://ancient-caverns-16784.herokuapp.com/movies/all",
    method: "POST",
    success: function(data) {
      console.log("Populated", data);
      alert("All movies added!")
      location.reload();
    }
  })
}

// Check if the user is logged in or not //
var checkUser = function() {
  var loginPanel = $(".login");
  var logOutBtn = $(".logout");
  var userPanel = $(".userPanel");
  var userImg = $(".userPanel img")
  var adminPanel = $(".admPanel");
  var name = $("#name");
  var userRank = $("#userRank");
  var editBtn = $("#edit");
  var deleteBtn = $("#del");
  var token = localStorage.getItem("Token");
  var auth = localStorage.getItem("Auth");
  var getName = localStorage.getItem("Name");
  var admin = "Admin"
  if (token && auth !== null) {
    name.html(getName);
    userRank.html(admin);
    loginPanel.hide();
    userPanel.show();
    userImg.show();
    adminPanel.show();
    logOutBtn.show();
    editBtn.show();
    deleteBtn.show();
  } else {
  	name.html("Guest");
    userRank.html("Viewer");
    loginPanel.show();
    userImg.hide();
    adminPanel.hide();
    logOutBtn.hide();
    editBtn.hide();
    deleteBtn.hide();
  }
}

var displayMovie = function(movie) {
  // Main Container //
  var mainCont = $("#movies")

  // Create a card for each movie //
  var movieDiv = $("<div></div>").addClass("col-md-6 mt-2 mb-2");
  var movieCard = $("<div></div>").addClass("card bg-light text-dark");
  var movieCardBlk = $("<div></div>").addClass("card-header");

  // Create a div for title //
  var titleDiv = $("<div></div>").addClass("text-center");

  // Create the title with the results from the api between h4 tags //
  var title = $("<h4>" + movie.title + "</h4>").addClass("text-center");

  // Create a new row for images and description //
  var rowDesc = $("<div></div>").addClass("row card-body");

  // Create a div for images with class col (collumn) //
  var colDivImg = $("<div></div>").addClass("col-md-6 border-right");

  // Create a div for description with class col (collumn)
  var colDivDesc = $("<div></div>").addClass("col-md-6");

  // Create the title with Description text between h4 tags //
  var description = $("<h4>Description</h4>").addClass("text-center");

  // Create an ul list //
  var list = $("<ul></ul>");
  var img = $(`<img src="` + movie.img + `">`).addClass("card-img-top");
  var type = $("<li><strong>Type:</strong> " + movie.type + "</li>")
  var year = $("<li><strong>Year:</strong> " + movie.year + "</li>")
  var duration = $("<li><strong>Runtime:</strong> " + movie.duration + "</li>")
  var lang = $("<li><strong>Language:</strong> " + movie.lang + "</li>")
  var country = $("<li><strong>Country:</strong> " + movie.country + "</li>")
  var rating = $("<li><strong>Rating:</strong> " + movie.rating + "</li>")
  var votes = $("<li><strong>Votes:</strong> " + movie.votes + "</li>")

  // Create the footer //
  var cardFooter = $("<footer></footer>").addClass("card-footer");

  // Create the button //
  var button = $("<button>More Info</button>").addClass("btn btn-primary btn-block");

  button.on("click", function() {
    window.location = "./assets/pages/movie.html?movieId=" + movie.id;
  })
  
  mainCont.append(movieDiv);

  // Add a card for each movie //
  movieDiv.append(movieCard);
  movieCard.append(movieCardBlk);

  // Add div for title //
  movieCardBlk.append(titleDiv);

  // Add the title between h4 tags //
  titleDiv.append(title);

  // Add a new row for image and desc //
  movieCard.append(rowDesc);

  // Add div with collumn class for image //
  rowDesc.append(colDivImg);

  // Add the image //
  colDivImg.append(img);

  // Create another div with collumn class for desc //
  rowDesc.append(colDivDesc);

  // Add description for each movie //
  colDivDesc.append(description);

  // Create a list with the description for each movie //
  colDivDesc.append(list);
  list.append(type);
  list.append(year);
  list.append(duration);
  list.append(lang);
  list.append(country);
  list.append(rating);
  list.append(votes);

  // Add button with "More Info" text for each movie //
  movieCard.append(cardFooter);

  // Add button with "More Info" text for each movie //
  cardFooter.append(button);

  checkUser()
}

// Create Pagination // 
var addPagination = function(moviesData) {
  var paginationDiv = $("#pagination");
  var pagUL = $(".pagination");
  var previous = $("<li id='prev'><a class='page-link'><i class='fa fa-angle-double-left'></i> Previous</a></li>");
  var next = $("<li id='next'><a class='page-link'>Next <i class='fa fa-angle-double-right'></i></a></li>");
  var limitPerPage = 10;
  var numberOfPages = moviesData.pagination.numberOfPages;
  var currentPage = moviesData.pagination.currentPage;

  // Add Pagination //
  paginationDiv.html(pagUL);
  pagUL.append(previous);
  pagUL.append(next);
  
  // Check the current page //
  function checkPage() {
    currentPage
    console.log("Current Page: ", currentPage)
  }
  
  // Create a function to display the next 10 movies //
  function nextPage() {
    if (currentPage === numberOfPages) {
      return false;
    } else {
      currentPage++;
      $("#movies .col-md-6").hide();
      for (var i = currentPage; i < currentPage; i++) {
        $("#movies .col-md-6:eq(" + i + ")").show();
      }
    }
    checkPage()
    pagination(currentPage * 10)
  }
  
  // Create a function to display the previous 10 movies //
  function prevPage() {
    if (currentPage === 1) {
      return false;
    } else {
      currentPage--;
      console.log(currentPage)
      $("#movies .col-md-6").hide();

      for (var i = currentPage; i < currentPage; i++) {
        $("#movies .col-md-6:eq(" + i + ")").show();
      }
    }
    checkPage()
    pagination((currentPage * 10) - 10)
  }

  // Call the pagination API //
  function pagination(skip) {
    var apiURL = "https://ancient-caverns-16784.herokuapp.com/movies?take=10&skip="
    $.ajax({
      url: apiURL + skip,
      method: "GET",
      success: function(moviesData) {
        for (var y = 0; y < moviesData.results.length; y++) {
          var movie = new Movie(moviesData.results[y]);
          displayMovie(movie)
        }
      }
    });
  }
  
  // Add event on each button //
  next.on("click", nextPage);
  previous.on("click", prevPage);

}