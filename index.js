let getComputerChoice = () =>{
    return Math.floor(Math.random() * 3) +1;
    
};

console.log(getComputerChoice());

let getHumanChoice = (humanChoice) =>{

}

let humanChoice = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();

console.log(humanChoice);