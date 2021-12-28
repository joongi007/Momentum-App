<<<<<<< HEAD
// When "What's your name?" is initially displayed and a name is entered, 
// "Hello {name}!" is output.

=======
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

<<<<<<< HEAD
// It is a function that is processed when the {name} is written.
function onLoginSubmit(event) {
=======
function onLoginSubmit(event){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreeting(username);
}

<<<<<<< HEAD
// show {name}
function paintGreeting(username) {
=======
function paintGreeting(username){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    greeting.innerText = `Hello ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

<<<<<<< HEAD
if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
=======
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    paintGreeting(savedUsername);
}