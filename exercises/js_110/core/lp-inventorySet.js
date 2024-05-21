/*
INVENTORY ITEM TRANSACTIONS [5min]
==========================
INPUT: {num} inventoryId, {array:obj} list of transactions
OUTPUT: {array} filtered to only transactions for specified inventory item
EXAMPLE
- (101, transactions) => filtering the ids that is 101
GOAL: Return a filtered array, that is filtered to the 1st input, the
transactions Id
DS
- {array} filteredTransactions
PROCESS
- FILTER the array with the id that matches in:inventoryId

INVENTORY ITEM AVAILABLE? [17min]
===========================
INPUT: {num} inventoryId, {array:obj} transactionList
OUTPUT: {boolean} based on whether inventory item is available
EXAMPLE
- (101, transactions) -> +5, +12, -18 = +17 - 18 = -1 => because it's less than
0
- (105, tx) -> +10, +25,
RULES: - return true only if the sum of the quantity values of the items'
transactions > 0
- movement: decides if you should add or subtract from quantity
  - in adds to the qty
  - out subtracts from the qty
DS:
- {number} currentQuantity
PROCESS
  FILTER out the transactions with the id -- @transactionsFor()
  CHECK if movement is IN
    YES: Add the number of quantity specified by the transactions obj
  CHECK if movement is OUT
    YES: Subtract the number of quantity from currentQuantity
  CHECK if currentQuantity > 0
    TRUE: RETURN true
    FALSE: RETURN false
*/

function isItemAvailableReduce(targetId, txList) {
  let quantity = transactionsFor(targetId, txList).reduce(
    (sum, transaction) => {
      if (transaction.movement === "in") return sum + transaction.quantity;
      if (transaction.movement === "out") return sum - transaction.quantity;
    },
    0,
  );
  return quantity > 0;
}

function isItemAvailable(targetId, transactionsList) {
  let currentQuantity = 0;
  transactionsFor(targetId, transactionsList).forEach((transaction) => {
    if (transaction.movement === "in") currentQuantity += transaction.quantity;
    if (transaction.movement === "out") currentQuantity -= transaction.quantity;
  });

  return currentQuantity > 0;
}

function transactionsFor(targetId, transactionsList) {
  return transactionsList.filter((transaction) => transaction.id === targetId);
}

// TESTS
let transactions = [
  { id: 101, movement: "in", quantity: 5 },
  { id: 105, movement: "in", quantity: 10 },
  { id: 102, movement: "out", quantity: 17 },
  { id: 101, movement: "in", quantity: 12 },
  { id: 103, movement: "out", quantity: 20 },
  { id: 102, movement: "out", quantity: 15 },
  { id: 105, movement: "in", quantity: 25 },
  { id: 101, movement: "out", quantity: 18 },
  { id: 102, movement: "in", quantity: 22 },
  { id: 103, movement: "out", quantity: 15 },
];

function testTransactions() {
  console.log(transactionsFor(101, transactions));
  // returns
  // [ { id: 101, movement: "in",  quantity:  5 },
  //   { id: 101, movement: "in",  quantity: 12 },
  //   { id: 101, movement: "out", quantity: 18 }, ]
}

function testIsItemAvailable() {
  console.log(
    isItemAvailable(101, transactions), // false
    isItemAvailable(103, transactions), // false
    isItemAvailable(105, transactions), // true
  );
}

function testIsItemAvailableReduce() {
  console.log(
    isItemAvailableReduce(101, transactions), // false
    isItemAvailableReduce(103, transactions), // false
    isItemAvailableReduce(105, transactions), // true
  );
}

testIsItemAvailableReduce();
