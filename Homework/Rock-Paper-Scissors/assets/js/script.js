// When DOM is available //
document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  // Rock, Paper, Scissors - Game //
  
  var rock = document.getElementById('rock');
  var paper = document.getElementById('paper');
  var scissors = document.getElementById('scissors');
  var playAgainButton = document.getElementById('playAgain');
  
  // User, Comp, Results, Winners //
  var playerResult = document.getElementById('playerResult');
  var compResult = document.getElementById('compResult');
  var winnerResult = document.getElementById('winner');
  var winnerResultSound = document.getElementById('winnerSound');
  var playerScoreDisplay = document.getElementById('playerScore');
  var compScoreDisplay = document.getElementById('compScore');
  
  
  // Score //
  var playerScore = 0;
  var compScore = 0;
  
  // Winners //
  var winners = [
    '<img src="assets/images/playerWins.png" alt="playerWins" class="img-fluid" width="30%">', 
    '<img src="assets/images/computerWins.png" alt="computerWins" class="img-fluid" width="30%">',
    '<img src="assets/images/tie.png" alt="tie" class="img-fluid" width="25%">'
  ]
  
  var playerWin = function() {
    winnerResult.innerHTML = winners[0];
  };
  var compWin = function() {
    winnerResult.innerHTML = winners[1];
  };
  var tie = function() {
    winnerResult.innerHTML = winners[2];
  };
  
  // Sounds //
  var sounds = [
    `<audio autoplay><source src="assets/audio/Boing.mp3" type="audio/mpeg"></audio>`,
    `<audio autoplay><source src="assets/audio/Ahh.mp3" type="audio/mpeg"></audio>`,
    `<audio autoplay><source src="assets/audio/Cheering.mp3" type="audio/mpeg"></audio>`,
    `<audio autoplay><source src="assets/audio/game.mp3" type="audio/mpeg"></audio>`
  ]
  var playerSelect = function() {
    var playerSelectSound = document.getElementsByClassName('playSound');
    for (var i = 0; i < playerSelectSound.length; i++){
      playerSelectSound[i].innerHTML = sounds[0];
    }
  };
  var compWinSound = function() {
    winnerResultSound.innerHTML = sounds[1];
  };
  var playerWinSound = function() {
    winnerResultSound.innerHTML = sounds[2];
  };
  var resetGameSound = function() {
    winnerResultSound.innerHTML = sounds[3];
  };
  
  // Icons //
  var icons = [
    '<img src="assets/images/rock.png" alt="rock" class="img-fluid" width="50%">',
    '<img src="assets/images/paper.png" alt="paper" class="img-fluid" width="50%">', 
    '<img src="assets/images/scissors.png" alt="scissors" class="img-fluid" width="50%">'
  ];
  
  var playerRockIcon = function() {
    playerResult.innerHTML = icons[0];
  };
  var playerPaperIcon = function() {
    playerResult.innerHTML = icons[1];
  };
  var playerScissorsIcon = function() {
    playerResult.innerHTML = icons[2];
  };
  var compRockIcon = function() {
    compResult.innerHTML = icons[0];
  };
  var compPaperIcon = function() {
    compResult.innerHTML = icons[1];
  };
  var compScissorsIcon = function() {
    compResult.innerHTML = icons[2];
  };
  
  
  // All the choices are stored in an Array. //
  var choices = ['rock', 'paper', 'scissors'];
  
  // Handles the click event when user selects a move. 
  rock.onclick = playRock;
  paper.onclick = playPaper;
  scissors.onclick = playScissors;
  playAgainButton.onclick = playAgain;
 
  // Functions that govern what happens when user clicks appropriate icon //
  function playRock() {
    play(choices[0]);
  }

  function playPaper() {
    play(choices[1]);
  }

  function playScissors() {
    play(choices[2]);
  }
  
  // Function that randomizes the computer choice. //
  function getCompChoice() {
  var compChooses = choices[Math.floor(Math.random() * choices.length)];
  return compChooses;
  }
  
  // Runs the entire game after user selects a move. //
  function play(playerPlay) {

   // Assigns a new variable to the function that randomizes the comp choice //
    var compChoice = getCompChoice();
    
    // Three sets of nested if-else statements for when user picks rock, paper, or scissors //
    if (playerPlay == choices[0]) {
      playerRockIcon();
      playerSelect();
      if (compChoice == choices[0]) {
        compRockIcon();
        tie(); 
      }

      else if (compChoice == choices[1]) {
        compPaperIcon();
        compWin();
        compWinSound();
        compScore++
      }

      else if (compChoice == choices[2]) {
        compScissorsIcon();
        playerWin();
        playerWinSound();
        playerScore++
      }

    }

    else if (playerPlay == choices[1]) {
      playerPaperIcon();
      playerSelect();
      if (compChoice == choices[1]) {
        compPaperIcon();
        tie();   
      }

      else if (compChoice == choices[0]) {
        compRockIcon();
        playerWin();
        playerWinSound();
        playerScore++
      }

      else if (compChoice == choices[2]) {
        compScissorsIcon();
        compWin();
        compWinSound();
        compScore++
      }
    }

    else if (playerPlay == choices[2]) {
      playerScissorsIcon();
      playerSelect();
      if (compChoice == choices[2]) {
        compScissorsIcon();
        tie(); 
      }

      else if (compChoice == choices[0]) {
        compRockIcon();
        compWin();
        compWinSound();
        compScore++;
      }

      else if (compChoice == choices[1]) {
        compPaperIcon();
        playerWin();
        playerWinSound();
        playerScore++;
      }
    }  
  
    playerScoreDisplay.innerHTML = playerScore;
    compScoreDisplay.innerHTML = compScore; 
  }
  
  //Reset game when player clicks 'Play Again' button
  function playAgain () {
   playerScore = 0;
   compScore = 0;
   playerScoreDisplay.innerHTML = playerScore;
   compScoreDisplay.innerHTML = compScore;
   resetGameSound();
  }
}