const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDoItems = [];

const CONST_STRING_TO_DO_ITEMS = "toDoItems";

function saveToDoItems() {
	localStorage.setItem(CONST_STRING_TO_DO_ITEMS, JSON.stringify(toDoItems));
}

function deleteToDo(event) {
	const li = event.target.parentNode;

	toDoItems = toDoItems.filter(toDoObj => toDoObj.id !== parseInt(li.id));

	saveToDoItems();

	li.remove();
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	const button = document.createElement("button");

	span.innerText = newToDo.text;

	button.innerText = "❌";
	button.addEventListener("click", deleteToDo);

	li.appendChild(span);
	li.appendChild(button);
	toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
	event.preventDefault();

	const newToDo = toDoInput.value;

	const newToDoObj = {
		text: newToDo,
		id: Date.now()
	};

	toDoItems.push(newToDoObj);

	toDoInput.value = "";

	paintToDo(newToDoObj);

	saveToDoItems();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const parsedToDoItems = JSON.parse(localStorage.getItem(CONST_STRING_TO_DO_ITEMS));

if (parsedToDoItems !== null) {
	toDoItems = parsedToDoItems;
	parsedToDoItems.forEach(paintToDo);
}