/*
1. Groceries
2. Inventory Item Transactions
*/

function buyFruit(array) {
  let fruitsArray = [];

  array.forEach(fruit => {
    while (fruit[1] > 0) {
      fruitsArray.push(fruit[0]);
      fruit[1]--;
    }
  });
  return fruitsArray;
}


let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(inventoryId, transactions) {
  return transactions.filter(transaction => transaction.id === inventoryId);
}

function isItemAvailable(inventoryId, transactions) {
  let quantity = transactionsFor(inventoryId, transactions).reduce( (total, item) => {
    if (item.movement === 'in') {
      total += item.quantity;
    } else {
      total -= item.quantity;
    }
    return total;
  }, 0);

  return quantity > 0;
}

console.log({
  // 1: buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]),
  // 2: transactionsFor(101, transactions),
  "3": isItemAvailable(101, transactions),     // false
  '3a': isItemAvailable(103, transactions),     // false
  '3b': isItemAvailable(105, transactions),     // true
});

// returns ["apple", "apple", "apple", "orange", "banana", "banana"]