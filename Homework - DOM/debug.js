// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

function renderBoardTitle() {
  const titleEl = document.getElementById("board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// What's wrong ↓
// const titleEl = document.querySelector(".board-title");
// Your fix ↓
//const titleEl = document.getElementById("board-title");
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function (taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.appendChild(li);
  });
}

renderTasks();

// What's wrong ↓
// list.innerHTML = li.outerHTML;
// Your fix ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  highCards.forEach((el) => {
    el.classList.add("highlighted");
  });
}

highlightTasks();

// Bug 1 ↓
// for (let i = 0; i <= highCards.length; i++) {
//     highCards[i].classList.add("highlighted");
//   }
// Bug 2 ↓
//document.querySelectorAll(".priority-high"); no priority-high class
// Your fix ↓
// use filter to find high-priority task and then add the class highlighted
