// Returns a boolean value depending upon whether an inventory item has an
// available quantity greater than zero.

function isItemAvailable(searchId, allTransactions) {
  const itemTransactions = transactionsFor(searchId, allTransactions);

  const netTotal = itemTransactions.reduce((runningNet, transaction) => {
    return runningNet + netQuantity(transaction.movement, transaction.quantity);
  }, 0);

  return netTotal > 0;
}

function transactionsFor(searchId, transactions) {
  return transactions.filter(transaction => searchId === transaction.id);
}

function netQuantity(movement, quantity) {
  return movement === 'in' ? quantity : -quantity;
}

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true
