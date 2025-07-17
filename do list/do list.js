let input = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskListContainer = document.getElementById("taskListContainer");
let id = 0;

function addTask() {
  if (input.value === "") {
    alert("Please enter a task");
    return;
  } else {
    id += 1;
    taskListContainer.innerHTML += `
      <li id="task_${id}">
        ${input.value}
        <img id="remove_${id}" src="delete.png" alt="remove" onclick="removeTask(${id})" />
      </li>
    `;
    input.value = "";
  }
}

function removeTask(id) {
  document.getElementById(`task_${id}`).remove();
}