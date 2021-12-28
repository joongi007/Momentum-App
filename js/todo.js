<<<<<<< HEAD
// todo list management.

=======
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";

let toDos = []

<<<<<<< HEAD
// Save it in dB.
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Delete it from db.
function deletToDo(event) {
=======
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletToDo(event){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id != parseInt(li.id))
    saveToDos();
}

<<<<<<< HEAD

// Displaying the list.
function paintToDo(newTodoObj) {
=======
function paintToDo(newTodoObj){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.id = newTodoObj.id;
    li.appendChild(button);
    li.appendChild(span);
<<<<<<< HEAD

=======
    
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    button.innerText = "X"
    span.innerText = newTodoObj.text;

    button.addEventListener("click", deletToDo);

    toDoList.appendChild(li);
}

<<<<<<< HEAD
// Add it to the list, save it to DB, and output the list.
function handleToDoSubmit(event) {
=======
function handleToDoSubmit(event){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
<<<<<<< HEAD
        text: newTodo,
=======
        text:newTodo,
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

<<<<<<< HEAD
if (savedToDos != null) {
=======
if(savedToDos != null){
>>>>>>> 33baca3efcbf3082db08b7c14fd3898f8096fd8f
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}