// #region[A] NOTEPAD
/*
I. GOAL
• Create a rock paper scissors game
• \Input\: ask the user to choose 1.rock, 2.paper, 3.scissors
• \Output\: 1. You won, 2. You lost, 3. Stalemate, try again

--- Additional Details
• Randomly generate an integer 1-3 for the computer's response
• Compare the rock, paper, scissors with the user choice and see who wins
• rock beats scissors, paper beast rock, scissors beats paper

*/
// #endregion[A]

// #region[00] SETUP
const readline = require('readline-sync');
const messages = require('./rock-paper-scissors.json');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock', 'r', 'p', 'sc', 'l', 'sp'];
let userScore = 0;
let computerScore = 0;
let answer;

// #endregion[00]

// #region[01] HELPER FNS
function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, computerChoice) {
  // --- COMPARE USER VS COMP CHOICES
  prompt(`You chose ${userChoice}. The computer chose ${computerChoice}`);

  if ((userChoice.startsWith('r') && computerChoice.startsWith('l')) ||
(userChoice.startsWith('p') && computerChoice.startsWith('r')) ||
(userChoice.startsWith('sc') && computerChoice.startsWith('p')) ||
(userChoice.startsWith('l') && computerChoice.startsWith('sp')) ||
(userChoice.startsWith('sp') && computerChoice.startsWith('sc'))) {
    prompt(messages.winner);
    userScore += 1;
  } else if ((computerChoice.startsWith('r') && userChoice.startsWith('l')) ||
  (computerChoice.startsWith('p') && userChoice.startsWith('r')) ||
  (computerChoice.startsWith('sc') && userChoice.startsWith('p')) ||
  (computerChoice.startsWith('l') && userChoice.startsWith('sp')) ||
  (computerChoice.startsWith('sp') && userChoice.startsWith('sc'))) {
    prompt(messages.loser);
    computerScore += 1;
  } else {
    prompt(messages.stalemate);
  }

  prompt(`Your Score: ${userScore} | Computer Score: ${computerScore}`);
}


// #endregion[01]

// #region[02] MAIN PROGRAM

do {

  // --- ROUND OF 5
  while (userScore !== 5 && computerScore !== 5) {
    prompt(messages.welcome);

    // - USER CHOICE
    prompt(messages.userChoice);
    let userChoice = readline.question();

    while (!VALID_CHOICES.includes(userChoice)) {
      prompt(messages.invalidChoice);
      userChoice = readline.question();
    }

    //  - COMPUTER CHOICE
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(userChoice, computerChoice);
  }

  if (userScore === 5) {
    prompt(messages.winner);
  } else if (computerScore === 5) {
    prompt(messages.loser);
  }

  userScore = 0;
  computerScore = 0;

  // --- PLAY AGAIN?
  prompt(messages.playAgain);
  answer = readline.question().toLowerCase();

  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(messages.invalidYesNo);
    answer = readline.question();
  }

} while (answer[0] === 'y');

// #endregion[02]