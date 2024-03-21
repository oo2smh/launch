// #region[00] SETUP
const readline = require('readline-sync');
const MESSAGES = require('./rps_messages.json');
// #endregion[00]

// #region[00] OTHER VARS
const MOVES = {
  rock: {
    id: 1,
    abbr: 'r',
    beats: ['scissors', 'lizard']
  },
  paper: {
    id: 2,
    abbr: 'p',
    beats: ['rock', 'spock']
  },
  scissors: {
    id: 3,
    abbr: 'sc',
    beats: ['paper', 'lizard']
  },
  spock: {
    id: 4,
    abbr: 'sp',
    beats: ['paper', 'spock']
  },
  lizard: {
    id: 5,
    abbr: 'l',
    beats: ['paper', 'spock']
  },
};

let userScore = 0;
let computerScore = 0;
// #endregion[00]

// #region[01] HELPER FNS
// UX ENHANCEMENTS
// ==================================================
function displayMessage(message, ...moreMessages) {
  message = MESSAGES[message] ?? message;
  moreMessages = moreMessages.map(msg => MESSAGES[msg]).join('');
  console.log(`=> ${message}${moreMessages}`);
}

function displayChoices(userChoice, computerChoice) {
  displayMessage(`You chose ${userChoice}. Computer chose ${computerChoice}`);
}

function displayScores() {
  displayMessage(`Your Score ${userScore} || Computer Score ${computerScore}`);
}

function displayWinner(didUserWin) {
  if (didUserWin) {
    displayMessage('userWins');
  } else if (!didUserWin) {
    displayMessage('computerWins');
  } else {
    displayMessage('stalemate');
  }
}

function displayGameWinner(winner) {
  displayMessage(`${winner}Wins`);
}

// VALIDATION
// ==================================================
function isInvalidChoice(choice) {
  const VALID_MOVES = ['1', '2', '3', '4', '5', 'r', 'p', 'sc', 'sp', 'l'];
  return !VALID_MOVES.includes(choice);
}

function isValidYes(response) {
  return (response.startsWith('y')
  || response.startsWith('yes'));
}

// #endregion[01]

// #region[02] CORE SUBPROCESSES
function getUserChoice() {
  displayMessage('userChoice');
  let userChoice = readline.question();

  while (isInvalidChoice(userChoice)) {
    console.clear();
    displayMessage('invalidChoice', 'userChoice');
    userChoice = readline.question();
  }
  return userChoice;
}

function getComputerChoice() {
  const MIN = 1;
  const MAX = 5;
  let computerChoice =
  Math.floor((Math.random() * (MAX - MIN + 1))) + MIN;
  return computerChoice;
}

function updateToFullName(choice) {
  const VALID_NAMES = ['rock', 'paper', 'scissors', 'spock', 'lizard'];

  let fullName = VALID_NAMES.find(elem => {
    return MOVES[elem].id === Number(choice)
    || MOVES[elem].abbr === choice;
  });
  return fullName;
}

function isUserWinner(userChoice, computerChoice) {
  const WINNING_MOVES = MOVES[userChoice].beats;
  let isUserWinner;

  if (WINNING_MOVES.includes(computerChoice)) {
    isUserWinner = true;
  } else {
    isUserWinner = false;
  }

  return isUserWinner;
}

function updatePoint(isUserWinner) {
  if (isUserWinner) {
    userScore++;
  } else {
    computerScore++;
  }
}

function isStopPlaying() {
  displayMessage('stopPlaying');
  let userResponse = readline.question().toLowerCase();
  if (isValidYes(userResponse)) {
    return true;
  }
  return false;
}

function isEndScoreMet() {
  const END_SCORE = 3;
  return userScore === END_SCORE
  || computerScore === END_SCORE;
}

function resetScores() {
  userScore = 0;
  computerScore = 0;
}

function getGameWinner() {
  let winner;
  if (userScore === 5) {
    winner = 'user';
  } else {
    winner = 'computer';
  }

  return winner;
}
// #endregion[02]

// #region[03] 1 MAIN FLOW
function playRound() {
  displayMessage('welcome', 'rules');
  displayScores();

  let userChoice = getUserChoice();
  let computerChoice = getComputerChoice();

  computerChoice = updateToFullName(computerChoice);
  userChoice = updateToFullName(userChoice);

  displayChoices(userChoice, computerChoice);

  let didUserWin = isUserWinner(userChoice, computerChoice);
  displayWinner(didUserWin);
  updatePoint(didUserWin);

  displayMessage('nextRound');
  readline.question();
  console.clear();
}

function playGame() {
  while (true) {
    playRound();

    if (isEndScoreMet()) {
      displayMessage('endOfGame');
      displayGameWinner(getGameWinner());
      resetScores();
      if (isStopPlaying()) break;
      console.clear();
    }
  }
}

playGame();

// #endregion[03]