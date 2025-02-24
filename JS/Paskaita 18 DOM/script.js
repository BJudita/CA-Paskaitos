const clickMyName = document.querySelector("#name");  
clickMyName.addEventListener("click", () => {
  alert("Judita");
});

// short version
document.querySelector("#name").addEventListener("click", () => alert("Judita"));

//ABout me
const aboutMe = document.querySelector(".about-me");

aboutMe.addEventListener("click", () => {
const newP = document.createElement("p");
newP.textContent = "Man patinka vaikscioti ir darineti krevetes";
document.body.append(newP);
});

//+1 prideda papilodma skai2iu
let counter = 1;
const button = document.querySelector(".one");
button.addEventListener("click", () => {
 counter++;
 document.querySelector("h1").innerText = counter;
})