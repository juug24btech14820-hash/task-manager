function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    alert("Button clicked"); // TEST LINE

    if (task === "") {
        alert("Enter something!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
function clearAll() {
    document.getElementById("taskList").innerHTML = "";
    localStorage.removeItem("tasks");
}li.innerHTML = task +
" <div><button onclick='completeTask(this)'>✔</button>" +
"<button onclick='deleteTask(this)'>❌</button></div>";