// Constructor function for each Movie //
function Movie(options) {
  options = options || {};
  this.id = options._id;
  this.title = options.Title;
  this.img = options.Poster;
  this.type = options.Type;
  this.year = options.Year;
  this.duration = options.Runtime;
  this.lang = options.Language;
  this.country = options.Country;
  this.rating = options.imdbRating;
  this.imdbID = options.imdbID;
  this.votes = options.imdbVotes;
}

Movie.prototype.getGameDetails = function() {
  var that = this
  return $.get("https://ancient-caverns-16784.herokuapp.com/movies/" + this.id)
    .then(function(response) {
      that.id = response._id;
      that.title = response.Title;
      that.year = response.Year;
      that.rated = response.Rated;
      that.released = response.Released;
      that.duration = response.Runtime;
      that.genre = response.Genre;
      that.director = response.Director;
      that.writer = response.Writer;
      that.actors = response.Actors;
      that.description = response.Plot;
      that.language = response.Language;
      that.country = response.Country;
      that.awards = response.Awards;
      that.img = response.Poster;
      that.metaScore = response.Metascore;
      that.rating = response.imdbRating;
      that.votes = response.imdbVotes;
      that.type = response.Type;
      that.seasons = response.totalSeasons;
    });
}

Movie.prototype.AddMovie = function() {
  let userToken = localStorage.getItem("Token");
  $.ajax({
    url: "https://ancient-caverns-16784.herokuapp.com/movies",
    method: "POST",
    headers: {
      'X-Auth-Token': userToken
    },
    data: {
      Title: this.title,
      Year: this.year,
      imdbID: this.imdbID,
      Type: this.type,
      Genre: this.genre,
      Poster: this.img,
      Language: this.language
    },
    success: function(data) {
      console.log("Create movie", data);
      location.reload();
    }
  });
}

Movie.prototype.DeleteMovie = function(movieID) {
  let userToken = localStorage.getItem("Token");
  $.ajax({
    url: "https://ancient-caverns-16784.herokuapp.com/movies/" + movieID,
    method: "DELETE",
    headers: {
      'X-Auth-Token': userToken
    },
    success: function(data) {
      alert("Movie deleted!");
      window.location = "../../index.html"
    },
  });
}