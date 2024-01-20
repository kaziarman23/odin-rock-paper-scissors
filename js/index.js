const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissor = document.querySelector(".scissor")
const roundResult = document.querySelector(".outcome")

let playerScore = 0;
let computerScore = 0;

buttonRock.addEventListener("click",function(){
  const computerSelection = getcomputerchoice()
  const playerSelection ="rock"
  playRound(playerSelection,computerSelection)
  
})
buttonPaper.addEventListener("click",function(){
  const computerSelection = getcomputerchoice()
  const playerSelection ="paper"
  playRound(playerSelection,computerSelection)
})
buttonScissor.addEventListener("click",function(){
  const computerSelection = getcomputerchoice()
  const playerSelection ="scissor"
  playRound(playerSelection,computerSelection)
})


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


function playRound(choiceP,choiceC){
  
  if(choiceP === choiceC){
    const p = document.createElement("p")
    p.innerText = "Round Tie"
    roundResult.append(p)
  }
  else if(
            (choiceP === "rock" && choiceC === "scissor")||
            (choiceP === "paper" && choiceC === "rock")||
            (choiceP === "scissor" && choiceC === "paper")
          )
  {       
    const p = document.createElement("p")
    p.innerText = "Player win the Round"
    roundResult.append(p)
    playerScore++
  }
  else{      
    const p = document.createElement("p")
    p.innerText = "Computer win the Round"
    roundResult.append(p)
    computerScore++
  }

  displayScore()
  cheakWinner()
}


function displayScore(){
    const score =document.querySelector(".score")
    score.innerText =`Player score: ${playerScore} ,Computer score: ${computerScore}`
}


function cheakWinner(){
    if( playerScore === 5){
        const h2 =document.createElement("h2")
        h2.innerText ="player win the match, Thanks for playing"
        roundResult.appendChild(h2)
        disableButtons()
    }
    else if( computerScore === 5){
        const h2 =document.createElement("h2")
        h2.innerText ="computer win the match, Thanks for playing"
        roundResult.appendChild(h2)
        disableButtons()
    }
}

function disableButtons() {
    buttonRock.disabled = true;
    buttonPaper.disabled = true;
    buttonScissor.disabled = true;
  }