const winners =[];

function game(){
  for(let i = 1; i <= 5; i++){
    playRound(i)
  }
}

function playRound(round){
    const playerSelection = getplayerchoice()
    const computerSelection = getcomputerchoice()
    const winner =winnerCheck(playerSelection,computerSelection)
    winners.push(winner);
    logRound(getplayerchoice,getcomputerchoice,winner,round)
}

function getplayerchoice(){
  let input =prompt("Type Rock,Paper,Scissor")
  while(input === null){
    input = prompt("Please try to understand, Type Rock,Paper,Scissor only")
  }
  input.toLocaleLowerCase();
  
  if(input === "rock"){
    console.log("playerGive:","rock")
  }else if(input === "paper"){
    console.log("playerGive:","paper")
  }else if(input === "scissor"){
    console.log("playerGive:","scissor")
  }else{
    console.log("ahaa dude typing mistake, Try Again")
  }
  return input
}

function getcomputerchoice(){
  let random =Math.ceil(Math.random()*3)

  if(random === 1){
    console.log("computerGive:","rock")
    return "rock"
  }else if(random === 2){
    console.log("computerGive:","paper")
    return "paper"
  }else{
    console.log("computerGive:","scissor")
    return "scissor"
  }
}


function winnerCheck(choiceP,choiceC){

  if(choiceP === choiceC){
    return "Round Tie"
  }
  else if(
            (choiceP === "rock" && choiceP === "scissor")||
            (choiceP === "paper" && choiceP === "rock")||
            (choiceP === "scissor" && choiceP === "paper")
          )
  {       
    return "player win the Round"
  }
  else{
    return "computer win the Round"
  }
}


function logRound(getplayerchoice,getcomputerchoice,winner,round){
  let pwin =winners.filter(function (item){
    return item === "player win the Round"
  }).length
  let cwin =winners.filter(function (item){
    return item === "computer win the Round"
  }).length
  let tie =winners.filter(function (item){
    return item === "Round Tie"
  }).length
  console.log("Round",round)
  console.log("player score:",pwin)
  console.log("computer score:",cwin)
  console.log("Tie round:",tie)
  console.log("........................")
}

game()