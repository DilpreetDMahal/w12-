// ============================================================
// 🐛  ARRAY METHODS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should create a new array of prices with tax added (10%).
// Instead it logs an array of undefined. What's wrong?

const prices = [29.99, 49.99, 14.99, 99.99];

const withTax = prices.map(function(price) {
  const taxed = price * 1.10;
  console.log(taxed);
});

console.log("With tax:", withTax);

// What's wrong ↓
//console.log(taxed);
// Your fix ↓
// return taxed or return price * 1.10

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return only the pending orders.
// But it returns an empty array. Why?

const orders = [
  { id: 1, status: "delivered" },
  { id: 2, status: "pending"   },
  { id: 3, status: "pending"   },
  { id: 4, status: "cancelled" }
];

const pending = orders.filter(function(order) {
  return order.status = "pending";
});

console.log(pending);

// What's wrong ↓

//  return order.status = "pending";
// Your fix ↓

//  return order.status === "pending";

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This should calculate the total value of all orders
// (quantity × price for each). It produces a wrong result.
// There are TWO bugs.

const lineItems = [
  { product: "Shirt",  quantity: 2, price: 29.99 },
  { product: "Jeans",  quantity: 1, price: 59.99 },
  { product: "Jacket", quantity: 3, price: 89.99 }
];

const orderTotal = lineItems.reduce(function(acc, item) {
  return acc + item.quantity * item.price;
});

console.log("Order total: $" + orderTotal);

// Bug 1 ↓

//const orderTotal = lineItems.reduce(function(acc, item) {
//  return acc + item.quantity * item.price;
//});  

// no zero for acc
// Bug 2 ↓
// Hint: run it and read the output carefully.
// What is the value on the first iteration?

// semicolon after return statement

// Your fix ↓
//const orderTotal = lineItems.reduce(function(acc, item) {
//  return acc + item.quantity * item.price
//},0);