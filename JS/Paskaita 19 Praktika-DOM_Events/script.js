
const tds = document.querySelectorAll("td"); // paima elementus su icon
let firstCard = null; // seka anksciau atverta td
let firstIconClass = "";
let matchedCards = []; //  sekti dulbliuotas iconas

// td.addEventListener("click", () => {screenTop
//   icon.style.color = "#b5a2f8"; // nustato spalvas i pasirinktas
//   td.style.background = "#ffffff";
// });

tds.forEach(td => {
td.addEventListener("click", () => {
  const icon = td.querySelector("i"); // paima i (icon) i6 pasirinkto td
  
  if (!icon || matchedCards.includes(td)) {
return; // ignoruot paspaudimus atnt jau atvertu korteliu
  }

  icon.style.color = "#b5a2f8"; // nustato spalvas i pasirinktas
  td.style.background = "#ffffff";

if (firstCard) {
    if (firstIconClass === icon.className) { // jei sekanti korta atveriama jas palyginti
      
matchedCards.push(firstCard, td) //  pazymi abi kortas kaip match
firstCard = null;
firstIconClass = "";
    } else {

      setTimeout(() => { // jei kortos nesutampa u=daryk jas
        firstCard.querySelector("i").style.color = "transparent"; // atsrato spalva iconos 1-os
        td.querySelector("i").style.color = "transparent";  // antros
        firstCard.style.background = "#aeffab"; // atstato fona pirmos kortos
        td.style.background = "#aeffab"; // antros
        firstCard = null; // atstato 1-a korta ateinantiems paspaudimams
        firstIconClass = ""; // icona
    }, 1000);
  }
} else {// saugo esamos iconos klase
  firstCard= td;
  firstIconClass = icon.className; 
    }
});
});

