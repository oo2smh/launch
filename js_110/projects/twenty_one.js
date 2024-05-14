/*
GAME OVERVIEW: Get as close to 21 without going over. Win Condition. When both
players and dealers stay, compare the value. If one player busts, the other
player wins. If both player busts or have same numerical value, then it's a tie.

I/O
{dealerCard, userCard} => HIT or STAY => String displaying winner
* @input: {[1st card, unknown]} dealerCard
* @input: {[card1, card2]} userCard
* @output: {string} `Dealer has ${numberOfPoints} and User has ${numOfPoints}.
${winner wins}`

RULES:
  - 2 players [dealer, user]
  - 52 card deck, possible cards [2-10, Jack, Queen, King, Ace]
    - 4 suits (Hearts, Spades, Club, Diamond)
    - Ace has a dynamic value of 1 or 11
  - Possible Actions per turn: hit (draw a card) or stay
  - Player always goes 1st
  - Dealer shows 1 card of his hand
  - Dealer hits until hand is at least 17
  - If you have 17, you should stay too
  - If you see that dealer has ACE, you should hit

EXAMPLES
- Dealer: [Ace, unknown], User: [2, 8]:
  HIT: You should hit cause dealer has an Ace
- Dealer: [7, unknown], User: [10, 7]:
  STAY: You should stay whenever you have 17
- Dealer: [5, unknown], User: [Jack, 6]:
  STAY: If the unknown is a low value -> The user will have to draw again. If
  the unknown is a high value, chances are high that the user will bust. In both
  cases, the dealer will most likely bust.

INTERMEDIATES
  json messages to hold all msgs
  Object holding all info
    possibleCards = object key: value + suit, value: card's worth
    userHand: []
    dealerHand: []

PROCESS fn-play21
  SET a list of possible cards
  SET an array to hold dealer's cards
  SET an array to hold user's cards
  SET a GOAL_LIMIT = 21
  ---------------------------------
  GENERATE randomly the dealer's two cards
  GENERATE randomly the user's two cards
  ---------------------------------
  DISPLAY one of the dealer's two cards
  DISPLAY user's two cards
  ---------------------------------
  PROMPT user if they want to HIT or STAY
  DETERMINE if computer should HIT or STAY
  DETERMINE winner
  ---------------------------------
  RETURN winner
  PROMPT if user wants to play again?

SUBPROCESSES
fn-initializeDeck
fn-displayMsg = @param {str} msg -- @return {str} `=> ${msg}`
fn-calculateTotal = @param {hand} -- @return {+int}
fn-initializeHand = @return {[card1, card2]}
fn-isOver21 || busted =  @param {array of ints} playerCards -- @return {boolean}
fn-hasAce = @param {hand} -- @return {boolean}
fn-removeAces
fn-determineAceValue = @param {hand} -- @return {int} 1 or 11
fn-drawRandomCard = @return a random card from list of possible cards
fn-chooseUserAction
*/
const readline = require("readline-sync");
const GOAL_LIMIT = 21;
const MESSAGES = {
  userHand: "The user's hand is ",
  dealerHand: "The dealer's hand is ",
};
let consumedCards = [];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

let displayMessage = prompt;

function initializeDeck() {
  const POSSIBLE_CARDS = {};
  const CARD_SUITS = [..."hdcs"];
  const CARD_VALUES = [..."a23456789", "10", ..."jqk"];

  CARD_SUITS.forEach((suit) => {
    CARD_VALUES.forEach((value) => {
      POSSIBLE_CARDS[`${value}${suit}`] = getCardValue(value);
    });
  });

  return POSSIBLE_CARDS;
}

const DECK_LIST = initializeDeck();

function getCardValue(cardValue) {
  const ACE_DEFAULT_VALUE = 11;
  const FACE_VALUE = 10;
  if (cardValue === "a") return ACE_DEFAULT_VALUE;
  return [..."jqk"].includes(cardValue) ? FACE_VALUE : cardValue;
}

function initializeHand(hand = []) {
  while (hand.length < 2) {
    let drawnCard = drawRandomCard();
    hand.push(drawnCard);
    updateUsedCards(drawnCard);
  }
  return hand;
}

function updateUsedCards(drawnCard) {
  consumedCards.push(drawnCard);
}

function drawRandomCard() {
  const DECK = Object.keys(DECK_LIST);
  const TOTAL_CARDS = DECK.length;
  while (true) {
    let randomIndex = Math.floor(Math.random() * TOTAL_CARDS);
    let randomCard = DECK[randomIndex];
    if (!consumedCards.includes(randomCard)) return randomCard;
  }
}

function isOver21(hand) {
  return calculateTotal(hand) > 21;
}

function calculateTotal(hand) {
  let sum = hand.reduce((total, card) => {
    return total + DECK_LIST[card];
  });

  changeAceValue(hand, sum);
  return sum;
}

function changeAceValue(hand, sum) {
  hand
    .filter((card) => card.startsWith("a"))
    .forEach((_) => {
      if (sum > GOAL_LIMIT) sum -= 10;
    });
}

function userTurn() {
  displayMessage(MESSAGES.userHand, MESSAGES.dealerHand);
  let userAction;

  while (true) {
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      userAction = readline.question().toLowerCase();

      if (["h", "s"].includes(userAction)) break;
      prompt("Sorry. You must enter either 'h' or 's'");
    }
    if (userAction === "h") userHand.push(drawRandomCard());
    if (userAction === "s" || isOver21(userHand)) break;
  }
}

// MAIN FLOW
let userHand = initializeHand();
let dealerHand = initializeHand();
userTurn();
