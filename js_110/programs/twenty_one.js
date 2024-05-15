// # SETUP
// ============================
const readline = require("readline-sync");
let cardsInPlay = [];
const GOAL_SUM = 21;
const DECK_LIST = initializeDeck();
let userHand, dealerHand;

// # DISPLAY
// ============================
function prompt(msg, dynamicValue = "") {
  console.log(`=> ${msg}` + dynamicValue);
}
let displayMessage = prompt;

// # INITIALIZATION
// ============================
function initializeDeck() {
  const POSSIBLE_CARDS = {};
  const CARD_SUITS = [..."HDCS"];
  const CARD_VALUES = [..."A23456789", "10", ..."JQK"];

  CARD_SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      POSSIBLE_CARDS[`${value}${suit}`] = getCardValue(value);
    });
  });

  return POSSIBLE_CARDS;
}

function getCardValue(cardValue) {
  const ACE_DEFAULT_VALUE = 11;
  const FACE_VALUE = 10;
  if (cardValue === "A") return ACE_DEFAULT_VALUE;
  return [..."JQK"].includes(cardValue) ? FACE_VALUE : Number(cardValue);
}

function initializeHand(hand = []) {
  while (hand.length < 2) {
    let drawnCard = drawRandomCard();
    hand.push(drawnCard);
    updateUsedCard(drawnCard);
  }
  return hand;
}

// # SUBPROCESSES
// ============================
function updateUsedCard(drawnCard) {
  cardsInPlay.push(drawnCard);
}

function drawRandomCard() {
  const DECK = Object.keys(DECK_LIST);
  const TOTAL_CARDS = DECK.length;
  while (true) {
    let randomIndex = Math.floor(Math.random() * TOTAL_CARDS);
    let randomCard = DECK[randomIndex];
    if (!cardsInPlay.includes(randomCard)) return randomCard;
  }
}

function isOver21(hand) {
  return calculateTotal(hand) > GOAL_SUM;
}

function calculateTotal(hand) {
  let sum = hand.reduce((total, card) => {
    return total + DECK_LIST[card];
  }, 0);

  changeAceValue(hand, sum);
  return sum;
}

function changeAceValue(hand, sum) {
  hand
    .filter((card) => card.startsWith("a"))
    .forEach((_) => {
      if (sum > GOAL_SUM) sum -= 10;
    });
}

// # MAIN LOGIC
// ============================
function userTurn() {
  let userAction;

  while (true) {
    displayMessage(`User: ${userHand}, Dealer: ${dealerHand[0]}, Unknown`);
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      userAction = readline.question().toLowerCase();

      if (["h", "s"].includes(userAction)) break;
      prompt("Sorry. You must enter either 'h' or 's'");
    }

    if (userAction === "h") {
      let drawnCard = drawRandomCard();
      userHand.push(drawnCard);
      updateUsedCard(drawnCard);
    }
    if (userAction === "s" || isOver21(userHand)) break;
  }
}

function dealerTurn() {
  const DEALER_MIN = 17;
  while (calculateTotal(dealerHand) < DEALER_MIN) {
    displayMessage("Dealer hits");
    let drawnCard = drawRandomCard();
    dealerHand.push(drawnCard);
    updateUsedCard(drawnCard);
    displayMessage(`Dealer Hand: ${dealerHand}`);
  }
}

function detectResults(userHand, dealerHand) {
  let userTotal = calculateTotal(userHand);
  let dealerTotal = calculateTotal(dealerHand);
  if (userTotal > GOAL_SUM) {
    return "Player busts";
  } else if (dealerTotal > GOAL_SUM) {
    return "Dealer busts";
  } else if (userTotal > dealerTotal) {
    return "Player";
  } else if (dealerTotal > userTotal) {
    return "Dealer";
  } else {
    return "Tie";
  }
}

function displayTotal(userHand, dealerHand) {
  let userTotal = calculateTotal(userHand);
  let dealerTotal = calculateTotal(dealerHand);
  displayMessage(`UserTotal: ${userTotal}`);
  displayMessage(`DealerTotal: ${dealerTotal}`);
}

function playAgain() {
  prompt("Do you want to play again? (y) or (n)");
  let userAnswer = readline.question().trim().toLowerCase();
  while (!userAnswer.startsWith("y") && !userAnswer.startsWith("n")) {
    prompt('Invalid answer. Please answer with a "y" or "n"');
    userAnswer = readline.question().trim().toLowerCase();
  }

  return userAnswer[0] === "y";
}

function resetGame() {
  cardsInPlay = [];
  userHand = [];
  dealerHand = [];
}

// # MAIN FLOW
// ============================
function runGame() {
  do {
    console.clear();
    displayMessage("Welcome to BlackJack");
    dealerHand = initializeHand();
    userHand = initializeHand();
    userTurn();
    dealerTurn();
    displayTotal(userHand, dealerHand);
    console.log(detectResults(userHand, dealerHand));
    resetGame();
  } while (playAgain());
}

runGame();
