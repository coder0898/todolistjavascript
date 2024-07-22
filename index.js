// variable
const taskInput = document.getElementById("task-input");
const addTask = document.getElementById("add-task");

function AddTaskInput(inputData) {
  const id = new Date();
  const taskData = {
    id: id.getMilliseconds(),
    task: inputData,
  };

  console.log(taskData);
  console.log("data added successfully");
}

addTask.addEventListener("click", () => {
  const inputData = taskInput.value;

  if (inputData.trim() === "") {
    alert("Please enter valid input data");
  } else {
    AddTaskInput(inputData);
  }
});
