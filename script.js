// DOM Elements
const taskInput = document.getElementById("taskInput");
const prioritySelect = document.getElementById("prioritySelect");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Add Task Event Listener
addTaskBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText !== "") {
        addTask(taskText, priority);
        taskInput.value = "";  // Clear input field after adding the task
    }
});

// Function to add a task
function addTask(taskText, priority) {
    const li = document.createElement("li");
    li.classList.add(priority.toLowerCase()); // Add priority class for color coding

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete");

    deleteBtn.addEventListener("click", function () {
        todoList.removeChild(li); // Delete task
    });

    li.appendChild(taskContent);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
}
