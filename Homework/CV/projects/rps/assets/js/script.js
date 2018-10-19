// When DOM is available //
$(onHtmlLoaded)

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  var rps = {
    // Rock, Paper, Scissors - Game //
    rock: $('#rock'),
    paper: $('#paper'),
    scissors: $('#scissors'),
    playAgainButton: $('#playAgain'),
    // User, Comp, Results, Winners //
    playerResult: $('#playerResult'),
    compResult: $('#compResult'),
    winnerResult: $('#winner'),
    winnerResultSound: $('#winnerSound'),
    playerScoreDisplay: $('#playerScore'),
    compScoreDisplay: $('#compScore'),
    // Choices //
    choices: ['rock', 'paper', 'scissors'],
    // Levels //
    levelsIcon: [
      '<img src="assets/images/level/1.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/2.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/3.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/4.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/5.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/6.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/7.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/8.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/9.png" alt="playerWins" class="img-fluid">', 
      '<img src="assets/images/level/0.png" alt="playerWins" class="img-fluid">' 
    ],
    // Winners //
    winners: [
      '<img src="assets/images/playerWins.png" alt="playerWins" class="img-fluid" width="30%">', 
      '<img src="assets/images/computerWins.png" alt="compWins" class="img-fluid" width="30%">',
      '<img src="assets/images/tie.png" alt="tie" class="img-fluid" width="25%">'
    ],
    // Sounds //
    sounds: [
      `<audio autoplay><source src="assets/audio/Boing.mp3" type="audio/mpeg"></audio>`,
      `<audio autoplay><source src="assets/audio/Ahh.mp3" type="audio/mpeg"></audio>`,
      `<audio autoplay><source src="assets/audio/Cheering.mp3" type="audio/mpeg"></audio>`,
      `<audio autoplay><source src="assets/audio/game.mp3" type="audio/mpeg"></audio>`
    ],
    // Icons //
    icons: [
      '<img src="assets/images/rock.png" alt="rock" class="img-fluid" width="50%">',
      '<img src="assets/images/paper.png" alt="paper" class="img-fluid" width="50%">', 
      '<img src="assets/images/scissors.png" alt="scissors" class="img-fluid" width="50%">'
    ],
    // Score //
    playerLevel: 1,
    playerXp: 0,
    playerScore: 0,
    compScore: 0,
    // Functions  Winners //
    playerWin: function() {
      rps.winnerResult.html(rps.winners[0]);
    },
    compWin: function() {
      rps.winnerResult.html(rps.winners[1]);
    },
    tie: function() {
      rps.winnerResult.html(rps.winners[2]);
    },
    // Function Player & Comp Select Sound //
    playerSelect: function() {
      var playerSelectSound = $('.playSound');
      var selectSound = playerSelectSound;
      for (var i = 0; i < playerSelectSound.length; i++){
        selectSound.html(rps.sounds[0]);
      }
    },
    compWinSound: function() {
      rps.winnerResultSound.html(rps.sounds[1]);
    },
    playerWinSound: function() {
      rps.winnerResultSound.html(rps.sounds[2]);
    },
    resetGameSound: function() {
      rps.winnerResultSound.html(rps.sounds[3]);
    },
    // Function Player & Comp Select Icons //
    playerRockIcon: function() {
    rps.playerResult.html(rps.icons[0]);
    },
    playerPaperIcon: function() {
      rps.playerResult.html(rps.icons[1]);
    },
    playerScissorsIcon: function() {
      rps.playerResult.html(rps.icons[2]);
    },
    compRockIcon: function() {
      rps.compResult.html(rps.icons[0]);
    },
    compPaperIcon: function() {
      rps.compResult.html(rps.icons[1]);
    },
    compScissorsIcon: function() {
      rps.compResult.html(rps.icons[2]);
    },
    // Functions that govern what happens when user clicks appropriate icon //
    playRock: function playRock() {
      play(rps.choices[0]);
    },
    playPaper: function playPaper() {
      play(rps.choices[1]);
    },
    playScissors: function playScissors() {
      play(rps.choices[2]);
    },
    // Function that randomizes the computer choice. //
    computerChoose: function getCompChoice() {
      var compChooses = rps.choices[Math.floor(Math.random() * rps.choices.length)];
      return compChooses;
    },
    //Reset game when player clicks 'Play Again' button
    playAgainFunction: function playAgain() {
     rps.playerScore = 0;
     rps.compScore = 0;
     rps.playerScoreDisplay.html(rps.playerScore);
     rps.compScoreDisplay.html(rps.compScore);
     rps.resetGameSound();
    }
  }
   
  // Handles the click event when user selects a move. 
  rps.rock.on("click", rps.playRock);
  rps.paper.on("click", rps.playPaper);
  rps.scissors.on("click", rps.playScissors);
  rps.playAgainButton.on("click", rps.playAgainFunction);
  
  // Cooldowns //
  rps.rock.click(function(){
    var btn = $(this);
    btn.prop('disabled', true);
    setTimeout(function(){
      btn.prop('disabled', false);
    }, 5000);
  });
  
  rps.paper.click(function(){
      var btn = $(this);
      btn.prop('disabled', true);
      setTimeout(function(){
        btn.prop('disabled', false);
      }, 5000);
    });
  
  rps.scissors.click(function(){
      var btn = $(this);
      btn.prop('disabled', true);
      setTimeout(function(){
        btn.prop('disabled', false);
      }, 5000);
    });
  
  // Level up System  & Level Down //
  var levelUp = function() {
    var xpRate = Math.floor(Math.random() * 40);
    if (rps.playerXp <= 0) {
      rps.playerXp = 0;
      rps.playerXp += xpRate;
      $("#level").html('<img src="assets/images/level/lvl.png" </img>' + rps.playerLevel);
      $("#xp").html("XP: " +  rps.playerXp);
    } else if (rps.playerXp < 100) {
      rps.playerXp += xpRate;
      $("#level").html('<img src="assets/images/level/lvl.png" </img>' + rps.playerLevel);
      $("#xp").html("XP: " + rps.playerXp);
    } else if (rps.playerXp >= 100) {
      rps.playerLevel++;
      $('.player-level-badge').html(rps.levelsIcon[rps.playerLevel-1])
      rps.playerXp = 0;  
      $("#level").html('<img src="assets/images/level/lvl.png" </img>' + rps.playerLevel);
      $("#xp").html("XP: " + rps.playerXp);
    }
  }
  
  var levelDown = function() {
    var xpRate = Math.floor(Math.random() * 4);
    if (rps.playerXp <= 0) {
      rps.playerXp -= xpRate;
      rps.playerXp = 0;
    } else if (rps.playerXp == 100) {
      rps.playerXp -= xpRate;
    } else {
      rps.playerXp = rps.playerXp;
    }
  }
  
  var xpBar = function() {
    rps.yourXpBar.style.width = ((rps.playerXp / (100)) * 100 + "%");
  }
  // Runs the entire game after user selects a move. //
  function play(playerPlay) {

   // Assigns a new variable to the function that randomizes the comp choice //
    var compChoice = rps.computerChoose();
    
    // Three sets of nested if-else statements for when user picks rock, paper, or scissors //
    if (playerPlay == rps.choices[0]) {
      rps.playerRockIcon();
      rps.playerSelect();
      if (compChoice == rps.choices[0]) {
        rps.compRockIcon();
        rps.tie(); 
      }

      else if (compChoice == rps.choices[1]) {
        rps.compPaperIcon();
        rps.compWin();
        rps.compWinSound();
        rps.compScore++
      }

      else if (compChoice == rps.choices[2]) {
        rps.compScissorsIcon();
        rps.playerWin();
        rps.playerWinSound();
        rps.playerScore++
      }

    }

    else if (playerPlay == rps.choices[1]) {
      rps.playerPaperIcon();
      rps.playerSelect();
      if (compChoice == rps.choices[1]) {
        rps.compPaperIcon();
        rps.tie();   
      }

      else if (compChoice == rps.choices[0]) {
        rps.compRockIcon();
        rps.playerWin();
        rps.playerWinSound();
        rps.playerScore++
      }

      else if (compChoice == rps.choices[2]) {
        rps.compScissorsIcon();
        rps.compWin();
        rps.compWinSound();
        rps.compScore++
      }
    }

    else if (playerPlay == rps.choices[2]) {
      rps.playerScissorsIcon();
      rps.playerSelect();
      if (compChoice == rps.choices[2]) {
        rps.compScissorsIcon();
        rps.tie(); 
      }

      else if (compChoice == rps.choices[0]) {
        rps.compRockIcon();
        rps.compWin();
        rps.compWinSound();
        rps.compScore++;
      }

      else if (compChoice == rps.choices[1]) {
        rps.compPaperIcon();
        rps.playerWin();
        rps.playerWinSound();
        rps.playerScore++;
      }
    }  
  
    rps.playerScoreDisplay.html(rps.playerScore);
    rps.compScoreDisplay.html(rps.compScore); 
  }
  
}