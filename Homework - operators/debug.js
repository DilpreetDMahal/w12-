// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

const billAmount = 80;
const tipPercent = 15;
const tipAmount  = billAmount % tipPercent;
console.log("Tip: $" + tipAmount);

// What's wrong ↓
// Use division in place of modulus operator

// Your fix ↓

// const tipAmount = billAmount / tipPercent;


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

// const countdown = 10;
// countdown -= 1;
// countdown -= 1;
// countdown -= 1;
// console.log("Countdown: " + countdown);

// What's wrong ↓
// let for const

// Your fix ↓
// let countdown = 10;

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 === username2));


// Logic bug ↓
// use === instead of ==
// maybe use .toLowerCase()



// Style issue 1 ↓
//const for var


// Style issue 2 ↓
// console.log(`Names match: ${username1 === username2}`);

// Your fix ↓
// const username1 = "gamer99";
// const username2 = "Gamer99";
// console.log(`Names match: ${username1 === username2}`);