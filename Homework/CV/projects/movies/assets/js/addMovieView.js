$(onhtmlloaded);

function onhtmlloaded() {
  console.log("DOM Loaded.");

  $('#addMovie').on('click', function(event) {
    event.preventDefault();
   
    $("#msg").html("Movie successfully added.");

    //alert('S-a apasat.');
    let movieTitle = $('[name="title"]').val();
    let movieYear = $('[name="year"]').val();
    let movieimdbID = $('[name="imdbID"]').val();
    let movieType = $('[name="type"]').val();
    let movieGenre = $('[name="genre"]').val();
    let moviePoster = $('[name="poster"]').val();
    let movieLanguage = $('[name="language"]').val();

    const movie = new Movie({
      Title: movieTitle,
      Year: movieYear,
      imdbID: movieimdbID,
      Type: movieType,
      Poster: moviePoster,
      Genre: movieGenre,
      Language: movieLanguage
      
    });
    
    movie.AddMovie();

  });

  $('#resetForm').on('click', function() {
    $("#succesPost").empty();
  });

}