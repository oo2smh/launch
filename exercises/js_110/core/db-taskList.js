/* [15min]
[ ] add a new task
[x] complete a given number of tasks
[ ] display tasks

(Ln 20)
the delete property is used which will remove the elem at the current slot and
replace it with an empty item. When you display using forEach, empty items are
shown as undefined. Instead of using delete, you should use a destructive method
such as shift() to remove the elem
*/

let todos = [
  "wash car",
  "exercise",
  "buy groceries",
  "balance budget",
  "call plumber",
  "feed fido",
  "get gas",
  "organize closet",
];

function addTask(task) {
  if (todos.includes(task)) {
    console.log("That task is already on the list.");
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    todos.shift();
    // delete todos[0];
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log("All tasks complete!");
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`);
  console.log("---------------------");

  for (let idx = 0; idx < todos.length; idx++) {
    console.log(`-- ${todos[idx]}`);
  }
}

// Utilizing our task manager

addTask("oil change");
addTask("dentist");
addTask("homework");

completeTasks(3);
displayTaskList();
