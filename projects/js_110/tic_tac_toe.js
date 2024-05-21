const readline = require("readline-sync");
const MARKER = {
  empty: " ",
  human: "X",
  computer: "O",
};

const WINNING_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayBoard(board) {
  console.clear();
  console.log(`You are ${MARKER.human}. Computer is ${MARKER.computer}`);
  console.log("");
  console.log(`     |     |`);
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log(`     |     |`);
  console.log(`-----+-----+-----`);
  console.log(`     |     |`);
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log(`     |     |`);
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[square] = MARKER.empty;
  }
  return board;
}
function getEmptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === MARKER.empty);
}

function addPlayerMark(board) {
  let square;
  let emptySquares = getEmptySquares(board);

  while (true) {
    prompt(`Choose a number ${emptySquares.join(", ")}`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) break;
    prompt(`Sorry that's not a valid choice`);
  }
  board[square] = MARKER.human;
}

function addComputerMark(board) {
  let emptySquares = getEmptySquares(board);
  let randomIndex = Math.floor(Math.random() * emptySquares.length);
  let square = emptySquares[randomIndex];
  board[square] = MARKER.computer;
}

function winnerExists(board) {
  return Boolean(detectWinner(board));
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === MARKER.human &&
      board[sq2] === MARKER.human &&
      board[sq3] === MARKER.human
    ) {
      return "Player";
    } else if (
      board[sq1] === MARKER.computer &&
      board[sq2] === MARKER.computer &&
      board[sq3] === MARKER.computer
    ) {
      return "Computer";
    }
  }
  return null;
}

function isBoardFull(board) {
  return getEmptySquares(board).length === 0;
}

// PROCESS
playAgain: while (true) {
  let board = initializeBoard();
  while (true) {
    displayBoard(board);
    addPlayerMark(board);
    addComputerMark(board);
    if (winnerExists(board) || isBoardFull(board)) break;
  }
  displayBoard(board);

  if (winnerExists(board)) {
    prompt(`${detectWinner(board)} wins`);
  } else {
    prompt("It's a tie");
  }

  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase()[0];
  if (answer !== "y") break playAgain;
}

/*
------------------------------
WIN CONDITIONS
  - 3 consecutive elems in row, columns, diagonals
------------------------------

------------------------------
DISPLAY Board
PROMPT user for mark
GENERATE computer for mark randomly
UPDATE Board
CHECK for winner
  YES: DISPLAY winner
  NO: CONTINUE playing
PROMPT user if they want to play again
Goodbye
------------------------------
*/
