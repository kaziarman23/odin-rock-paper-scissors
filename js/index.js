const winners = [];

function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  resultDeclaration();
}

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = winnerCheck(playerSelection, computerSelection);
  console.log(winner);
}

function getComputerChoice() {
  let random = Math.ceil(Math.random() * 3);
  if (random === 1) {
    console.log("ComputerGive:", "rock");
    return "rock";
  } else if (random === 2) {
    console.log("ComputerGive:", "paper");
    return "paper";
  } else {
    console.log("ComputerGive:", "scissor");
    return "scissor";
  }
}

function getPlayerChoice() {
  let input = prompt("Type rock, paper, scissor");
  while (input === null) {
    input = prompt("Please type rock, paper, scissor");
  }
  input = input.toLowerCase();

  if (input === "rock") {
    console.log("playerGive:", "rock");
  } else if (input === "paper") {
    console.log("playerGive:", "paper");
  } else if (input === "scissor") {
    console.log("playerGive:", "scissor");
  } else {
    console.log("ahaaa typing mistake, try again");
  }
  return input;
}

function winnerCheck(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return "Round_Tie";
  } else if (
    (choiceP === "rock" && choiceC === "scissor") ||
    (choiceP === "paper" && choiceC === "rock") ||
    (choiceP === "scissor" && choiceC === "paper")
  ) {
    return "player win the Round";
  } else {
    return "computer win the Round";
  }
}


game();








// function getComputerChoice(){
//     const getNUM = Math.ceil(Math.random() * 3);
//     if(getNUM === 1){
//       console.log("ComputerGive:", "rock");
//       return "rock";
//     } else if(getNUM === 2){
//       console.log("ComputerGive:", "paper");
//       return "paper";
//     } else {
//       console.log("ComputerGive:", "scissor");
//       return "scissor";
//     }
//   }
  
//   function getPlayerChoice(){
//     let input = prompt("Type Rock, Paper, Scissor");
//     while(input === null){
//       input = prompt("Please try to understand. Type Rock, Paper, Scissor");
//     }
//     input = input.toLowerCase();
//     if(input === "rock"){
//       console.log("playerGive:", "rock");
//     } else if(input === "paper"){
//       console.log("playerGive:", "paper");
//     } else if(input === "scissor"){
//       console.log("playerGive:", "scissor");
//     } else {
//       console.log("uff typing mistake, please Try Again");
//     }
//     return input;
//   }
  
//   const winners = [];
  
//   function winnerCheck(choiceP, choiceC){
//     if(choiceP === choiceC){
//       return "Round Tie";
//     } else if(
//       (choiceP === "rock" && choiceC === "scissor") ||
//       (choiceP === "paper" && choiceC === "rock") ||
//       (choiceP === "scissor" && choiceC === "paper")
//     ){
//       return "Player win the round";
//     } else {
//       return "Computer win the round";
//     }
//   }
  
//   function logRounds(getPlayerChoice, getComputerChoice, winner, round){
//     console.log("Round:", round);
//     console.log("player chose:", getPlayerChoice);
//     console.log("computer chose:", getComputerChoice);
//     console.log(winner);
//     console.log("....................");
//   }

//   function playRound(round){
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     const winner = winnerCheck(playerSelection, computerSelection);
//     winners.push(winner);
//     logRounds(playerSelection, computerSelection, winner, round);
//   }
  

//   function logwin(){
//     let playerWins = winners.filter(function(item){
//       return item === "Player win the round";
//     }).length;
//     let computerWins = winners.filter(function(item){
//       return item === "Computer win the round";
//     }).length;
//     let Ties = winners.filter(function(item){
//       return item === "Round Tie";
//     }).length;
//     console.log("Results:");
//     console.log("player Wins:", playerWins);
//     console.log("Computer Wins:", computerWins);
//     console.log("Ties:", Ties);
//   }


//   function game(){
//     for(let i = 1; i <= 5; i++){
//       playRound(i);
//     }
//     logwin();
//   }
  
//   game();