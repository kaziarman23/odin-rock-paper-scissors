let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorButton = document.querySelector(".scissor")
const outcomeDiv = document.querySelector(".outcome")


rockButton.addEventListener("click",function (){
    const computerSelection = getcomputerchoice()
    const playerSelection = "rock"
    playRound(computerSelection,playerSelection)
})

paperButton.addEventListener("click",function (){
    const computerSelection = getcomputerchoice()
    const playerSelection = "paper"
    playRound(computerSelection,playerSelection)
})

scissorButton.addEventListener("click",function (){
    const computerSelection = getcomputerchoice()
    const playerSelection = "scissor"
    playRound(computerSelection,playerSelection)
})


function getcomputerchoice(){
  let random = Math.ceil(Math.random()*3)

  if(random === 1){
    console.log("ComputerGive:","rock")
    return "rock"
  }
  else if(random === 2){
    console.log("ComputerGive:","paper")
    return "paper"
  }
  else{
    console.log("ComputerGive:","scissor")
    return "scissor"
  }
}


function playRound(choiceP,choiceC){
   
  if(choiceP === choiceC){
    let p = document.createElement("p")
    p.innerText = "Round Tie"
    outcomeDiv.append(p)
  }
  else if(
          (choiceP === "rock" && choiceC === "scissor")||   
          (choiceP === "paper" && choiceC === "rock")||   
          (choiceP === "scissor" && choiceC === "paper")   
         )
  {
    let p = document.createElement("p")
    p.innerText = "Player win the match"
    outcomeDiv.append(p)
    playerScore++
  }
  else{
    let p = document.createElement("p")
    p.innerText = "Computer win the match"
    outcomeDiv.append(p)
    computerScore++
  }
  displayScore ()
  checkWinner()
}


function displayScore (){
  const score = document.querySelector(".score")
  score.innerText = `player score: ${playerScore} ,Computer score: ${computerScore}`
}

function checkWinner(){
  if(playerScore === 5){
    let h2 =document.createElement("h2")
    h2.innerText = "Player win the match"
    outcomeDiv.append(h2)
    disableButtons()
  }
  else if(computerScore === 5){
    let h2 =document.createElement("h2")
    h2.innerText = "Computer win the match"
    outcomeDiv.append(h2)
    disableButtons()
  }
}


function disableButtons(){
  rockButton.disabled =true
  paperButton.disabled =true
  scissorButton.disabled =true
}