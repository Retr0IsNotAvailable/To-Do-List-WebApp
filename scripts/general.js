const inputBoxElement = document.getElementById("input-box");
const listContainerElement = document.getElementById("list-container");
const addButtonElement = document.getElementById("add-button");

showTask();   // display tasks prev stored in memory

// define function to add li in ul
function addTask() {
  if (inputBoxElement.value === '') {   //check if the input is empty
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBoxElement.value;
    listContainerElement.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBoxElement.value = "";
  saveData();
}

// define an eventListener for listContainerElement to check tasks or remove them
listContainerElement.addEventListener('click', (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

// define a function to save the tasks
function saveData() {
  localStorage.setItem("data", listContainerElement.innerHTML);
}

// define a funtion to show task from the saveData function
function showTask() {
  listContainerElement.innerHTML = localStorage.getItem("data");
}

// call the addTask function with eventListener
addButtonElement.addEventListener('click', addTask); // for the button
inputBoxElement.addEventListener('keydown', (event) => {    // for the input 
  if (event.key === 'Enter') {
    addTask();
  }
});
