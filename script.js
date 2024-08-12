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