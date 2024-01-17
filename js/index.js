function game() {
  for (let i = 1; i <= 5; i++) {
    playRound();
  }
  
}

function playRound() {
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = winnerCheck(playerSelection, computerSelection);
  console.log(winner)
  
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
