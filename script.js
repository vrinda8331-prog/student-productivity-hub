/* TAB SWITCHING */

function showTab(tabId) {

  let tabs = document.querySelectorAll(".tab");

  tabs.forEach(function(tab) {

    tab.classList.add("hidden");
  });

  document.getElementById(tabId).classList.remove("hidden");
}







/* TASK MANAGER */

let taskInput = document.getElementById("taskInput");

let addTaskBtn = document.getElementById("addTaskBtn");

let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addTaskBtn.addEventListener("click", addTask);

function addTask() {

  let task = taskInput.value.trim();

  if (task === "") {

    alert("Please enter a task");

    return;
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";

  displayTasks();
}

function displayTasks() {

  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {

    let li = document.createElement("li");

    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

function deleteTask(index) {

  tasks.splice(index, 1);

  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();
}







/* NOTES */

let noteArea = document.getElementById("noteArea");

let saveNoteBtn = document.getElementById("saveNoteBtn");

noteArea.value = localStorage.getItem("notes") || "";

saveNoteBtn.addEventListener("click", function() {

  localStorage.setItem("notes", noteArea.value);

  alert("Notes Saved Successfully");
});







/* TIMER */

let seconds = 0;

let timer;

function updateTime() {

  let mins = Math.floor(seconds / 60);

  let secs = seconds % 60;

  document.getElementById("time").innerText =

    String(mins).padStart(2, "0")

    + ":"

    + String(secs).padStart(2, "0");
}

function startTimer() {

  clearInterval(timer);

  timer = setInterval(function() {

    seconds++;

    updateTime();

  }, 1000);
}

function stopTimer() {

  clearInterval(timer);
}

function resetTimer() {

  clearInterval(timer);

  seconds = 0;

  updateTime();
}







/* MOTIVATIONAL QUOTE */

let quoteBtn = document.getElementById("quoteBtn");

let quote = document.getElementById("quote");

quoteBtn.addEventListener("click", getQuote);

async function getQuote() {

  let quotes = [

    "Success is the sum of small efforts repeated daily.",

    "Dream big and dare to fail.",

    "Push yourself because no one else will do it for you.",

    "Discipline is the bridge between goals and achievement.",

    "Stay focused and never give up.",

    "Small progress is still progress."

  ];

  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = randomQuote;
}