let enter = document.querySelector("#entertask");
let button = document.querySelector(".btn");
let list = document.getElementById("list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => {
  const tasklist = document.createElement("li");
  list.append(tasklist);
  createTask(tasklist, task);
});

button.addEventListener("click", function () {
  if (enter.value.trim() !== "") {
    let task = {
      text: enter.value,
      completed: false,
    };

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    const tasklist = document.createElement("li");
    list.append(tasklist);
    createTask(tasklist, task);

    enter.value = "";
  }
});

function createTask(tasklist, task) {
  let check = document.createElement("input");
  check.type = "checkbox";
  check.id='checkbox'
  check.checked = task.completed;

  let text = document.createElement("span");
  text.textContent = task.text;

  let dlt = document.createElement("button");
  dlt.id='dlt-task'
  dlt.textContent = "Delete";

  let left = document.createElement("div");
  left.classList.add("left");

  left.append(check);
  left.append(text);

  tasklist.append(left);
  tasklist.append(dlt);

  if (task.completed) {
    left.style.textDecoration = "line-through";
    left.style.opacity = "0.6";
  }

  check.addEventListener("change", () => {
    task.completed = check.checked;

    localStorage.setItem("tasks", JSON.stringify(tasks));

    if (check.checked) {
      left.style.textDecoration = "line-through";
      left.style.opacity = "0.6";
    } else {
      left.style.textDecoration = "none";
      left.style.opacity = "1";
    }
  });

  dlt.addEventListener("click", () => {
    tasks = tasks.filter((t) => t !== task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    tasklist.remove();
  });
}

enter.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    button.click();
  }
});