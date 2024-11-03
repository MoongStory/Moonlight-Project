const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");

const CONST_STRING_HIDDEN = "hidden";
const CONST_STRING_USER_NAME = "userName";



function onLoginSubmit(event) {
	event.preventDefault();
	
	localStorage.setItem(CONST_STRING_USER_NAME, loginInput.value);

	showTheGreetings();
}

function showTheForm()
{
	loginForm.classList.remove(CONST_STRING_HIDDEN);
	greeting.classList.add(CONST_STRING_HIDDEN);
}

function showTheGreetings()
{
	greeting.innerText = `Hello ${localStorage.getItem(CONST_STRING_USER_NAME)}`;

	greeting.classList.remove(CONST_STRING_HIDDEN);
	loginForm.classList.add(CONST_STRING_HIDDEN);
}



const savedUserName = localStorage.getItem(CONST_STRING_USER_NAME);

if(savedUserName === null)
{
	loginForm.addEventListener("submit", onLoginSubmit);

	showTheForm();
}
else
{
	showTheGreetings();
}