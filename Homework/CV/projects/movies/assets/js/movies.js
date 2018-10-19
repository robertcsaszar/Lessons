var moviesModel = new Movies();
moviesModel.getAll().then(displayAllMovies);
//   console.log(Movies)

function displayAllMovies(moviesData) {
  addPagination(moviesData)
  for (var i = 0; i < moviesData.results.length; i++) {
    var movie = new Movie(moviesData.results[i]);
    displayMovie(movie)
  }
}