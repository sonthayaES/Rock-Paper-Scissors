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
        resultsDiv.textContent = (`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else if(humanChoice == "Rock" && computerChoice == "Paper"){
        resultsDiv.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else if(humanChoice == "Rock" && computerChoice == "Rock") {
        resultsDiv.textContent = (`You Tie ${humanChoice} tie with ${computerChoice}`);
    }else if(humanChoice == "Paper" && computerChoice == "Rock"){
        resultsDiv.textContent = (`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    }else if(humanChoice == "Paper" && computerChoice == "Scissors"){
        resultsDiv.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else if(humanChoice == "Paper" && computerChoice == "Paper"){
        resultsDiv.textContent = (`You tie ${humanChoice} tie with ${computerChoice}`);
    }else if(humanChoice == "Scissors" && computerChoice == "Paper"){
        resultsDiv.textContent = (`You Win! ${humanChoice} beats ${computerChoice}`);
        humanScore +=1;
    }else if(humanChoice == "Scissors" && computerChoice == "Rock"){
        resultsDiv.textContent = (`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore +=1;
    }else{
        resultsDiv.textContent = (`You tie with ${computerChoice}`);
    }
    scoreDiv.textContent = (whoLead(humanScore, computerScore));
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
        winnerDiv.textContent = ("Winner is human");
    }else{
        winnerDiv.textContent = ("Winner is computer");
    }
    console.log("-----Final Score-----");
}
    
const choiceRock = document.querySelector(".rock");
const choicePaper = document.querySelector(".paper");
const choiceScissors = document.querySelector(".scissors");
const resultsDiv = document.querySelector('#round-results');
const scoreDiv = document.querySelector('#running-score');
const winnerDiv = document.querySelector('#final-winner');


choiceRock.addEventListener('click', function(){
    playRound("Rock", getComputerChoice());
})

choicePaper.addEventListener('click', function(){
    playRound("Paper", getComputerChoice());
})

choiceScissors.addEventListener('click', function(){
    playRound("Scissors", getComputerChoice());
})


