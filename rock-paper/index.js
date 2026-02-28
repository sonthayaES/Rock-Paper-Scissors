let humanScore = 0;
let computerScore = 0;
let getComputerChoice = () =>{
let computerChoice = Math.floor(Math.random() * 3) +1;
    switch (computerChoice){
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
        default:
    }
    return computerChoice;

};

let playRound = (humanChoice, computerChoice) => {
    if(humanChoice == "Rock" && computerChoice == "Scissors"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else if(humanChoice == "Rock" && computerChoice == "Rock") {
        console.log(`You Tie ${humanChoice} tie with ${computerChoice}`);
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else if(humanChoice == "Paper" && computerChoice == "Paper"){
        console.log(`You tie ${humanChoice} tie with ${computerChoice}`);
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore +=1;
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else{
        console.log(`You tie with ${computerChoice}`);
    }
    console.log(whoLead(humanScore, computerScore));
    if(humanScore === 5 || computerScore === 5){
        winner();
    }
}

let whoLead = (humanScore, computerScore) => {
    if(humanScore > computerScore){
        return `Human is leading with ${humanScore} while computer score is ${computerScore}`
    }else if(computerScore > humanScore){
       return `Computer is leading with ${computerScore} while Human score = ${humanScore}`
    }else {
       return `It's a tie with both score at: ${humanScore}`
    }
}

let winner = () =>{
    if(humanScore >= 5 && computerScore <= 5){
        console.log("Winner is human");
    }else{
        console.log("Winner is computer");
    }
    console.log("-----Final Score-----");
}
    


const choiceRock = document.querySelector("button.rock");
const choicePaper = document.querySelector("button.paper");
const choiceScissors = document.querySelector("button.scissors");


choiceRock.addEventListener('click', function(){
    playRound("Rock", getComputerChoice());
})

choicePaper.addEventListener('click', function(){
    playRound("Paper", getComputerChoice());
})

choiceScissors.addEventListener('click', function(){
    playRound("Scissors", getComputerChoice());
})


