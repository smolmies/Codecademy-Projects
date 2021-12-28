let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);


const compareGuesses = (human, computer, target) => {
   
    if(Math.abs(target - computer) < Math.abs(target - human)){
       return false;
    }    
    return true;
};

const updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
};

const advanceRound = () => currentRoundNumber++;
