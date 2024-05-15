```js
/*
GAME OVERVIEW: Get as close to 21 without going over. Win Condition. When both
players and dealers stay, compare the value. If one player busts, the other
player wins. If both player busts or have same numerical value, then it's a tie.

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

GOAL: Create a 21 game
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
```
