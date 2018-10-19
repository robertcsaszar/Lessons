var searchResult = function() {
  var search = $(".searchBar").val()
  $("#movies").empty();

  // Create the container for back button //
  var container = $("<div></div>").addClass("container");
  var row = $("<div></div>").addClass("row");
  var col = $("<div></div>").addClass("col-md-1 mt-2 mb-2 ");
  var button = $("<button><i class='fa fa-angle-double-left'></i>Back</button>").addClass("btn btn-primary");

  button.on("click", function() {
    window.location = "./index.html"
  })
  
  // Add the back button on the page //
  $("#movies").append(container)
  container.append(row)
  row.append(col)
  col.append(button)
  
  $.ajax({
    url: "https://ancient-caverns-16784.herokuapp.com/movies?Title=" + search,
    success: function(response) {
      for (var i = 0; i < response.results.length; i++) {
        var searchResult = new Movie(response.results[i]);
        console.log(searchResult)
        displayMovie(searchResult);
      }
    }
  })
}