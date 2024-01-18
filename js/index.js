const buttonRock = document.querySelector(".rock")
const buttonPaper = document.querySelector(".paper")
const buttonScissor = document.querySelector(".scissor")
const roundResult = document.querySelector(".outcome")
  


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
  }
  else{      
    const p = document.createElement("p")
    p.innerText = "Computer win the Round"
    roundResult.append(p)
  }
}

