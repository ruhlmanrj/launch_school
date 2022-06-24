// How can you refactor the code below such that the function is
// able to accept an arbitrary number of arguments?

function invoiceTotal(amount1, amount2, amount3, amount4) {
  return amount1 + amount2 + amount3 + amount4;
}

invoiceTotal(20, 30, 40, 50);          // works as expected
invoiceTotal(20, 30, 40, 50, 40, 40);  // does not work; how can you make it work?


// New Implementation:
// Using a rest parameter in the function definition

function InvoiceTotal(...amounts) {
  amounts.reduce((total, amount) => total + amount);
}
