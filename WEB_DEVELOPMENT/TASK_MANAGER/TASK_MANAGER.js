document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            taskInput.value = "";
        }
    });

    function addTask(taskText) {
        const li = document.createElement("li");
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete-btn");
        li.innerText = taskText;
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        deleteBtn.addEventListener("click", function() {
            li.remove();
        });

        li.addEventListener("click", function() {
            li.classList.toggle("completed");
        });
    }
});
