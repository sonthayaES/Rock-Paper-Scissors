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

let getHumanChoice = () =>{
    let humanChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    let upperCase = humanChoice.charAt(0).toUpperCase();
    humanChoice = upperCase+ humanChoice.slice(1);
    return humanChoice;
}

let playGame = (numOfRound) =>{

    let humanScore = 0;
    let computerScore = 0;

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
            console.log(`You tie ${humanChoice} tie with ${computerChoice}`);
        }
    }

    let whoLead = (humanScore, computerScore) => {
        if(humanScore > computerScore){
            console.log(`Human is a leader with ${humanScore} while Computer score = ${computerScore}`);
        }else if(computerScore > humanScore){
            console.log(`Computer is leading with ${computerScore} while Human score = ${humanScore}`);
        }else {
            console.log(`It's a tie with both score at: ${humanScore}`);
        }
    }

    for(let i = 1; i <= numOfRound; i++){
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log("-----Final Score-----");
    whoLead(humanScore, computerScore);
}

playGame(5);



