// Constructor function for all Movies //
function Movies() {

}

// Get all Movies from the API //
Movies.prototype.getAll = function() {
  return $.get("https://ancient-caverns-16784.herokuapp.com/movies/");
}
