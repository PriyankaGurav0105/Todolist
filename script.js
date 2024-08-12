const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

//Add task
addBtn.addEventListener("click", function(){
    const taskText = taskInput.value.trim();
    if(taslText !==""){
        createTask(taskText);
        taskInput.value ="";
    }
});

//creating a new task
function createTask(text){
    const taskItem = document.createElement("li");
    taskItem.innerHTML='
    <span>${text}</span>
    <button class = "delete">Delete</button>
    ';
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
});