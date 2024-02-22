const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissor = document.querySelector(".scissor")
const score = document.querySelector(".scoer")
const declaretion = document.querySelector(".declaretion")

let playerScore = 0;
let computerScore = 0;
let winner =[];

rock.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "rock"
  winnerCheck("playerSecletion","computerSecletion")
  // winner.push(winnerCheck)

})

paper.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "paper"
  winnerCheck("playerSecletion","computerSecletion")
  // winner.push(winnerCheck)
})

scissor.addEventListener("click",function(){
  const computerSecletion = getcomputerchoice()
  const playerSecletion = "scissor"
  winnerCheck("playerSecletion","computerSecletion")
  // winner.push(winnerCheck)
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
    let comment = document.createElement("p")
    p.innerHTML =`<p></p>`
  }
  else if (
    (choiceP === "rock" && choiceC === "scissor")||
    (choiceP === "paper" && choiceC === "rock")||
    (choiceP === "scissor" && choiceC === "paper")
  ){
    score.innerHTML = `player win the Round`
    playerScore++
  }
  else{
    score.innerHTML = `computer win the Round`
    computerScore++
  }
}


function roundScore(){
  score.innerHTML =`player score:${playerScore} ,computer score:${computerScore}` 
}
