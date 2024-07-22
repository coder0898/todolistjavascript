// variable
const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("add-task");

const ListTask = document.getElementById("todo-list");

let TaskList = [];

function AddTaskInput(inputData) {
  const id = new Date();
  const taskData = {
    id: id.getMilliseconds(),
    task: inputData,
  };

  TaskList.push(taskData);

  //   console.log(taskData);
  console.log("data added successfully");
}

function DisplayTask() {
  TaskList.forEach((item) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${item.task}`;
    const deleteButton = document.createElement("button");
    deleteButton.id = `delete-task`;
    deleteButton.innerText = "Delete";
    li.appendChild(span);
    li.appendChild(deleteButton);
    ListTask.appendChild(li);
  });
}

addTask.addEventListener("click", () => {
  const inputData = taskInput.value;

  if (inputData.trim() === "") {
    alert("Please enter valid input data");
  } else {
    AddTaskInput(inputData);
    taskInput.value = "";
  }
  DisplayTask();
});

if (ListTask !== "") {
  DisplayTask();
} else {
  ListTask.innerHTML = `<p>No data to show</p>`;
}
