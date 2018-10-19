$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");
  
  var containerEl = document.getElementById("games-list");
  var cards = document.getElementById("something");
  var gamesContainer = $(".mainGames");
  var addGame = $("#addGame");
  var deleteConfirm = $(".confirmation");
  
  var gamesModel = new Games();
  gamesModel.getAll().then(displayAllGames);
  
  function displayAllGames(gamesData) {
    for(var i = 0; i < gamesData.length; i++) {
      var game = new Game(gamesData[i]);
      displayGame(game)
    }
  }
  
  function displayGame(game) {
    var colEl = document.createElement('div');
    colEl.className = "col-4 mt-2 mb-2";
    
    var cardEl = document.createElement('div');
    cardEl.className = "card h-100";
    
    var cardAlignEl = document.createElement('div');
    cardAlignEl.className = "card-block p-2"
    
    var titleEl = document.createElement('h4');
    titleEl.className = "card-title"
    titleEl.innerHTML = game.title;
    
//     var bodyEl = document.createElement('p');
//     bodyEl.className = "card-text";
//     bodyEl.innerHTML = game.description;
    
    var imgEl = document.createElement('IMG');
    imgEl.className = "card-img-top";
    imgEl.setAttribute("src", game.imageUrl);
    imgEl.setAttribute("width", "304");
    imgEl.setAttribute("height", "228");
    imgEl.setAttribute("alt", game.title);
    
    var cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    
    var cardsButton = document.createElement("button");
    cardsButton.className = "btn btn-primary btn-block"
    cardsButton.innerHTML = "More info"
    
    cardsButton.addEventListener("click", function() {
      window.location = "http://cursuri-robertdanielcsaszar97119.codeanyapp.com/Homework/OOP-Games/templates/game.html?gameId=" + game.id;
    });
     
    colEl.appendChild(cardEl);
    cardEl.appendChild(cardAlignEl);
    cardAlignEl.appendChild(titleEl);
    cardAlignEl.appendChild(imgEl);
//     cardAlignEl.appendChild(bodyEl);
    cardFooter.appendChild(cardsButton)
    cardAlignEl.appendChild(cardFooter);
    
    containerEl.appendChild(colEl); 
  }
  
  addGame.click(function() {
    gamesModel.addNewGame();
    gamesContainer.hide();
    deleteConfirm.show();
    deleteConfirm.html("Added a new game!");
    setTimeout(function() {
      window.location.reload();
    }, 1000);
  })
}