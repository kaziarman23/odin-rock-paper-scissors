const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const scoreBoard = document.querySelector(".scores")
const declaretion = document.querySelector(".declaretion")
const result = document.querySelector(".result")

let playerScore = 0;
let computerScore = 0;


rock.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "rock"
  playGame(playerSecletion,computerSecletion)
})

paper.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "paper"
  playGame(playerSecletion,computerSecletion)
})

scissor.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "scissor"
  playGame(playerSecletion,computerSecletion)
})

function getcomputerchoice(){
  const computerGive = Math.ceil(Math.random()*3)

  if(computerGive === 1){
    return "rock"
  }
  else if(computerGive === 2){
    return "paper"
  }
  else{
    return "scissor"
  }
}

function playGame(choiceP , choiceC){
  if (choiceP === choiceC){
    declaretion.innerHTML = `<p>Round Tie</p>`
  }
  else if (
    (choiceP === "rock" && choiceC === "scissor")||
    (choiceP === "paper" && choiceC === "rock")||
    (choiceP === "scissor" && choiceC === "paper")
  ){
    declaretion.innerHTML = `<p>Player win the Round</p>`
    playerScore++
  }
  else{
    declaretion.innerHTML = `<p>Computer win the Round</p>`
    computerScore++
  }
  roundScore()
  checkWinner()
}


function roundScore(){
  scoreBoard.innerHTML =`Player score: ${playerScore} , Computer score: ${computerScore}`
}

function checkWinner(){
 if(playerScore === 5){
  result.innerText = "Player win the match"
  disable_btn()
 }
 else if(computerScore === 5){
  result.innerText = "Computer win the match"
  disable_btn()
 }
}

function disable_btn(){
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}