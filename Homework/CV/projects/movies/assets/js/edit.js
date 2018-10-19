$(onHtmlLoad)

function onHtmlLoad() {
  const movies = $('#movies');
  const title = $('#title');
  const year = $('#year');
  const genre = $('#genre');

  const movieTemplate = $('#movie-template').html();

  function addMovie(movie) {
    movies.append(Mustache.render(movieTemplate, movie))
  }

  $.ajax({
    method: 'GET',
    url: 'https://ancient-caverns-16784.herokuapp.com/movies/5b8d51a83883280021371223',
    success: function(movie) {
      addMovie(movie);
    }
  })


  movies.delegate('.editMovie', 'click', function() {
    let li = $(this).closest('li');
    li.find('input.title').val(li.find('span.title').html());
    li.find('input.genre').val(li.find('span.genre').html());
    li.find('input.year').val(li.find('span.year').html());
    li.addClass('edit');
  })

  movies.delegate('.cancelEdit', 'click', function() {
    $(this).closest('li').removeClass('edit');
  })

  movies.delegate('.saveEdit', 'click', function() {
    let li = $(this).closest('li');
    let movie = {
      'Title': $li.find('input.title').val(),
      'Year': $li.find('input.year').val(),
      'Genre': $li.find('input.genre').val()
    }


    $.ajax({
      method: 'PUT',
      headers: {
        'X-Auth-Token': 'tnScgo0fzPm7H5d3qc6DZ24Dg-QEev4n'
      },
      url: 'https://ancient-caverns-16784.herokuapp.com/movies/' + li.attr('data-id'),
      data: movie,
      success: function(newMovie) {
        li.find('span.title').html(movie.Title);
        li.find('span.year').html(movie.Year);
        li.find('span.genre').html(movie.Genre);
        li.removeClass('edit');
      }
    })

  })


}
