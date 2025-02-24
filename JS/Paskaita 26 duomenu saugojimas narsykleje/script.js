// 1. Prane6imo i6saugojimas

function setNotification(message) {
    localStorage.setItem('notification', message); // irasys teksta i local storage
}
setNotification("Labas pasauli!");

function getNotification() {
 return localStorage.getItem("notification"); // grazins teksta is localstorage
}
// alert(getNotification());

// 3. ToDo puslapis


function addTask() {
   const taskInput = document.querySelector("#taskInput"); //
 const newTask = taskInput.value; // paims ivesta reiksme
 if (newTask) {
    const tasklist = document.querySelector("#taskList"); // paiima ul sarasa
    const li = document.createElement("li"); //sukurs li
    li.textContent = newTask;

    const deleteButton = document.createElement("button");
deleteButton.textContent = "Istrinti";
}
}