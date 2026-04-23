let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.onload = function(){
    renderTasks();
};

function addTask(){
    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if(text === "") return;

    let task = {
        id: Date.now(),
        text: text,
        done: false
    };

    tasks.push(task);
    saveAndRender();

    input.value = "";
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !== id);
    saveAndRender();
}

function toggleDone(id){
    tasks = tasks.map(task => {
        if(task.id === id){
            task.done = !task.done;
        }
        return task;
    });

    saveAndRender();
}

function clearAll(){
    tasks = [];
    saveAndRender();
}

function saveAndRender(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        let li = document.createElement("li");

        li.innerHTML = `
            <span class="${task.done ? 'done' : ''}">${task.text}</span>
            <div class="actions">
                <button class="doneBtn" onclick="toggleDone(${task.id})">Done</button>
                <button class="deleteBtn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        list.appendChild(li);
    });
}function clearAll(){
    tasks.length = 0;   // clears array properly
    document.getElementById("list").innerHTML = ""; // instantly clears UI
}