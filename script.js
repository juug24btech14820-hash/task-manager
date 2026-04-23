// Load tasks when page opens
window.onload = function () {
    loadTasks();
};

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = task +
        " <button onclick='completeTask(this)'>✔</button>" +
        " <button onclick='deleteTask(this)'>❌</button>";

    document.getElementById("taskList").appendChild(li);

    saveTasks();
    input.value = "";
}

function completeTask(btn) {
    btn.parentElement.classList.toggle("completed");
    saveTasks();
}

function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

// Save tasks to browser
function saveTasks() {
    let tasks = document.getElementById("taskList").innerHTML;
    localStorage.setItem("tasks", tasks);
}

// Load tasks from browser
function loadTasks() {
    let saved = localStorage.getItem("tasks");
    if (saved) {
        document.getElementById("taskList").innerHTML = saved;
    }
}

// Clear all tasks
function clearAll() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}