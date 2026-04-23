function addTask(){
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="markDone(this)">Done</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(btn){
    btn.parentElement.parentElement.remove();
}

function markDone(btn){
    let task = btn.parentElement.parentElement.querySelector("span");
    task.classList.toggle("done");
}

// ✅ NEW FEATURE: CLEAR ALL
function clearAll(){
    document.getElementById("taskList").innerHTML = "";
}