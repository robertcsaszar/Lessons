$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");

  // Define all the DOM's elements //
  var containerEl = document.getElementById("gameBody");
  var titleGame = document.getElementById("titleGame");
  var imgGame = document.getElementById("imgGame");
  var gameDescription = document.getElementById("gameDescription");
  var editBtn = $("#editBtn");
  var editBtn2 = $("#editBtn2");
  var deleteBtn = $("#deleteBtn");
  var confirmation = $(".confirmation");
  var mainContainer = $(".main");
  var editContainer = $(".edit");
  var backButton = $("#backBtn");

  var game = new Game();
  var gameId = getUrlParameter("gameId");
  game.id = gameId;

  game.getGameDetails().then(function() {
    displayGameDetails(game);
  });

  function displayGameDetails(gameDetails) {

    titleGame.innerHTML = ("Title: " + gameDetails.title);

    var imgEl = document.createElement('IMG');
    imgEl.className = "img-fluid text-center";
    imgEl.setAttribute("src", game.imageUrl);
    imgEl.setAttribute("width", "304");
    imgEl.setAttribute("height", "228");
    imgEl.setAttribute("alt", game.title);
    imgGame.appendChild(imgEl);

    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = gameDetails.description;
    gameDescription.appendChild(bodyEl);
  }

  // The edit button displayed on the left side of the game container *containerEl* //
  // On click the game container will hide and the edit container will be displayed //
  editBtn.click(function() {
    mainContainer.hide();
    editContainer.show();
  })

  // This edit button is displayed on the Edit container *editContainer* //
  // Placed under the input //
  // After choosing the new title, the confirmation will be displayed //
  // After 2 seconds the page reloads with the new title //
  editBtn2.click(function() {
    game.editGame();
    mainContainer.hide();
    editContainer.show();
    editContainer.text("Title successfully edited!");
    setTimeout(function() {
      window.location.reload();
    }, 2000);
  })

  // Delete the selected game //
  // After deleting a confirmation will be displayed //
  // and after 1 second the page will be redirected to //
  // the main Games page *index.html* //
  deleteBtn.click(function() {
    game.deleteGame();
    mainContainer.hide();
    confirmation.show();
    confirmation.text("Game successfully deleted!");
    setTimeout(function() {
      window.location = "http://cursuri-robertdanielcsaszar97119.codeanyapp.com/Homework/OOP-Games/templates/index.html"
    }, 1000);
  });

  // Back button //
  backButton.click(function() {
    window.history.back()
  })

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}