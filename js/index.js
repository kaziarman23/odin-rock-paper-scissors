const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const scoreBoard = document.querySelector(".scores")
const declaretion = document.querySelector(".declaretion")

let playerScore = 0;
let computerScore = 0;
let winner =[];

rock.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "rock"
  winnerCheck(playerSecletion,computerSecletion)
  
})

paper.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "paper"
  winnerCheck(playerSecletion,computerSecletion)
  
})

scissor.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "scissor"
  winnerCheck(playerSecletion,computerSecletion)
  
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

function winnerCheck(choiceP , choiceC){
  if (choiceP === choiceC){
    let div = document.createElement("div")
    div.innerHTML = `<p>Round Tie</p>`
    declaretion.appendChild(div)
  }
  else if (
    (choiceP === "rock" && choiceC === "scissor")||
    (choiceP === "paper" && choiceC === "rock")||
    (choiceP === "scissor" && choiceC === "paper")
  ){
    let div = document.createElement("div")
    div.innerHTML = `<p>Player win the Round</p>`
    declaretion.appendChild(div)
    playerScore++
  }
  else{
    let div = document.createElement("div")
    div.innerHTML = `<p>Computer win the Round</p>`
    declaretion.appendChild(div)
    computerScore++
  }
  roundScore()
}


function roundScore(){
  let p = document.createElement("p")
  p.innerHTML =`Player score:${playerScore} , Computer score:${computerScore}`
  scoreBoard.appendChild(p) 
}
