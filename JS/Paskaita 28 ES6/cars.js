export default function carList (app) {
    const list = ["BMW", "VW", "AUDI", "MB"];
    const ul = document.createElement("ul");

    list.forEach (car => {   // loops per kiekvien1 elementa
        const li = document.createElement("li");
        li.textContent = car; // nustato auto pavadinim1 kaip teksta
        ul.appendChild(li); // prijungia li prie ul
    });
    
    app.appendChild(ul); //sarasas pridedamas prie app
    }