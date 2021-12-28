const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('You did not enter a valid option for the game! Please try again.');
    }
  };
  
  function getComputerChoice () {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'Error';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return "It's a tie!";
    } 
    
    if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return "The computer has won this round!";
      } else{
        return "You have won this round!";
      }
    }
  
    if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return "The computer has won this round!";
      } else{
        return "You have won this round!";
      }
    }
  
    if (userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return "The computer has won this round!";
      } else{
        return "You have won this round!";
      }
    }
  
    if (userChoice === 'bomb'){
      return "You have definetly won this round!"
    }
  }
  
  function playGame () {
    const userChoice = getUserChoice('rock');
    console.log(`You picked ${userChoice}!`);
  
    const computerChoice = getComputerChoice();
    console.log(`Computer picked ${computerChoice}!`);
  
    console.log(determineWinner(userChoice, computerChoice));
  }
  
  playGame();