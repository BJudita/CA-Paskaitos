console.log(window.innerWidth);

// Teksto elemento kurimas
 function createTextElement(text) {
  const createdText = document.createElement("p");
  createdText.textContent = text;
  return createdText; // reikia returninti, kad veiktu
 }
 document.body.append(createTextElement("Teksto elemento kurimas"));

 // Elemento atnaujinimas
  const nameChange = document.querySelector("#name");
  nameChange.textContent = "Judita";

 // Klaida DOMe
 document.querySelector(".bluetext > span").textContent = "blue";

 //Automobiliu gamintoju sarasas

 const cars = document.querySelector("ol");

 const firstCar = cars.children[0];
 const secondCar = cars.children[1];

cars.insertBefore(secondCar, firstCar);
 

// Prekiu sarasas
function createList(list) {
const listUl = document.createElement("ul"); // sukuriamas ul

list.forEach ((element) => {
  const listLi = document.createElement("li"); // sukuria kiekvien1 li
  listLi.textContent = element; // paruosia nauja elementa kaip teksta
  listUl.append(listLi); //  priskiria li prie ul
});

return listUl; // grazinamas ul po loop (forEach)
  };
  document.body.appendChild(createList(["Pienas", "Duona", "Kiaušiniai"]));


  // Tic-Tac-Toe laimetojo nustatymas
