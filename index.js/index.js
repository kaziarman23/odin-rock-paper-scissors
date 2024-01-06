// function getComputerChoice(){
//    console.log("rock");
//    let randomNumber = Math.random();
//    console.log(randomNumber)
//     return
// }

//  getComputerChoice();

// function getplayerChoice(move){
//     if(move === ""){
//         console.log("paper");
//         return
//     }else if(move ="rock"){
//         console.log("rock");
//         return 
//     }else if(move ="paper"){
//         console.log("paper");
//         return 
//     }else if(move = "scissore"){
//         console.log("scissore");
//         return
//     }
    
// }
 
// getplayerChoice("");

// function  playround(playerSelection,computerSelection){
//     let declares = "You are the winner , play again";
//     return declares;
// }
    
// const playerSelection = prompt(getplayerChoice(""));
// const computerSelection = getComputerChoice();
// console.log(playround(playerSelection,computerSelection));






function getComputerChoice(){
    let randomNumber = Math.ceil(Math.random()*3);
    
    if (randomNumber === 1){
        console.log("computer give:","Rock");
    }else if (randomNumber === 2){
        console.log("computer give:","Paper");
    }else {
        console.log("computer give:","scissore")
    }
}



function getplayerChoice (move){
    
    if (move === "rock"){
        console.log("playerGive:","rock");
    }else if (move === "paper"){
        console.log("playerGive:","paper");
    }else if (move === "scissore"){
        console.log("playerGive:","scissore");
    }
}

function playround(){
 const playerSelection = getplayerChoice("rock");// have to give valu  
 const computerSelection = getComputerChoice();
   
}
playround("playerSelection","computerSelection");






















