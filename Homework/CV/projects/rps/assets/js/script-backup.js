// Rock, Paper, Scissors - Game //

function play() {
  var user = Math.random();
  var computer = Math.random();
  
  var choose = ["Rock", "Paper", "Scissors"];
  
  // User & Computer have 33% chance to pick rock, paper or scissors
  if(user < 0.34){
    user = choose[0];
  } else if (user <= 0.67){
    user = choose[1];
  } else {
    user = choose[2];
  }
  
  if(computer < 0.34){
    computer = choose[0];
  } else if (computer <= 0.67){
    computer = choose[1];
  } else {
    computer = choose[2];
  }
  
  // All possible combination of rock, paper and scissors
  // choice1 is the user and choice2 is the computer
  // All the combinations are around the choice1 - user, starting from the first possition
  // in the array wich is 0 and combine them 1 by 1
  // For example: 0 with 1 and 2, 0 with 2 and 1, 1 with 0 and 2... and so on
  var compare = function(choice1, choice2){
    if(choice1 === choice2){
      console.log("The result is a tie!");
    } else if(choice1 === choose[0]){
        if(choice2 === choose[1]){
          console.log("Computer wins!");
        } else if (choice2 === choose[2]){
          console.log("User wins!");
        } else {
          console.log("Nobody wins!");
        }
    } else if(choice1 === choose[0]){
        if(choice2 === choose[2]){
          console.log("User wins!");
        } else if (choice2 === choose[1]){
          console.log("Computer wins!");
        } else {
          console.log("Nobody wins!");
        }
    } else if(choice1 === choose[1]){
        if(choice2 === choose[0]){
          console.log("User wins!");
        } else if (choice2 === choose[2]){
          console.log("Computer wins!");
        } else {
          console.log("Nobody wins!");
        }
    } else if(choice1 === choose[1]){
        if(choice2 === choose[2]){
          console.log("Computer wins!");
        } else if (choice2 === choose[0]){
          console.log("User wins!");
        } else {
          console.log("Nobody wins!");
        }
    } else if(choice1 === choose[2]){
        if(choice2 ===choose[0]){
          console.log("Computer wins!");
        } else if (choice2 === choose[1]){
          console.log("User wins!");
        } else {
          console.log("Nobody wins!");
        }
    } else if(choice1 === choose[2]){
        if(choice2 ===choose[1]){
          console.log("User wins!");
        } else if (choice2 === choose[0]){
          console.log("Computer wins!");
        } else {
          console.log("Nobody wins!");
        }
    }  
  }
  
  // The choice is displayed for each player
  // After the choices are made, the compare function is called
  console.log("User choice:" + " " + user);
  console.log("Computer choice:" + " " + computer);
  compare(user, computer);
}

play();