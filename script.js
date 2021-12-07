// eg2: 1. Begin by creating elements

const userChoiceDisplay = document.createElement('h1');
const computerChoiceDisplay = document.createElement('h1');
const resultDisplay = document.createElement('h1');
const rpsgameGrid = document.getElementById('rpsgame');
rpsgameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay);

const choices = ['rock', 'paper', 'scissors'];
let userChoice;

//call a function expression
const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice(rpsgameGrid);
  //console.log('clicked');
};

for (let i = 0; i < choices.length; i++) {
  const button = document.createElement('button');
  button.id = choices[i]; // you can delete this id if you want to use e.target.innerHTML in the handleClick
  button.innerHTML = choices[i];
  button.addEventListener('click', handleClick);
  rpsgameGrid.appendChild(button);
}
/*
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    //getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length
  if (randomNumber === 1) {
    computerChoice = 'rock';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 3) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
  // console.log(randomNumber);

  function getResult() {
    if (computerChoice === userChoice) {
      result = 'its a draw!';
    }
    if (computerChoice === 'rock' && userChoice === 'paper') {
      result = 'you win!';
    }
    if (computerChoice === 'rock' && userChoice === 'scissors') {
      result = 'you lost!';
    }
    if (computerChoice === 'paper' && userChoice === 'scissors') {
      result = 'you win!';
    }
    if (computerChoice === 'paper' && userChoice === 'rock') {
      result = 'you lose!';
    }
    if (computerChoice === 'scissors' && userChoice === 'rock') {
      result = 'you win!';
    }
    if (computerChoice === 'scissors' && userChoice === 'paper') {
      result = 'you lose!';
    }
    resultDisplay.innerHTML = result;
  }
  getResult();
}
*/
