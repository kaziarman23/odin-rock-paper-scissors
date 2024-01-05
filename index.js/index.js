function getComputerChoice(){
   console.log("rock");
    return
}

//  getComputerChoice();



function getplayerChoice(move){
    if(move === ""){
        console.log("paper");
        return
    }else if(move ="rock"){
        console.log("rock");
        return 
    }else if(move ="paper"){
        console.log("paper");
        return 
    }else if(move = "scissore"){
        console.log("scissore");
        return
    }
    
}
//  getplayerChoice("");

function  playround(playerSelection,computerSelection){
    let declares = "You are the winner , play again";
    return declares;
}
    
const playerSelection = prompt(getplayerChoice(""));
const computerSelection = getComputerChoice();
console.log(playround(playerSelection,computerSelection));