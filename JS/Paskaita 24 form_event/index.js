// apskaičiuoja įvedamo input amžiaus kainą, kuri bus taikoma

const ageInput = document.querySelector("#age");
const form = document.querySelector("form");
const priceDisplay = document.querySelector("h1");

function handleAgeSubmit(event) {
    event.preventDefault()
    const price = 6;
    const age = Number(ageInput.value); // konvertuoja i skaiciu Number()

if (age <= 16) {
   priceDisplay.textContent =  price * 0.5;
} else if (age >= 60) {
    priceDisplay.textContent = (price / 3) * 2;
} else {
    priceDisplay.textContent = price; // i6karto prideda kaina 5 h1
}
}

// form.addEventListener("submit", handleAgeSubmit);



// pasiima pažymatą radio ir pasako ar reikia į kariuomene.

const input = document.querySelector("input[type=checkbox]");
const form2 = document.querySelector("form");
const ageInput2 = document.querySelector("#age2");
const result = document.querySelector(".result");

function handleFormSubmit(event) {
    event.preventDefault();
    const submittedAge = Number(ageInput2.value); // konvertuoja 5 skai2ius
    const isConvicted = input.checked; // paiima radio (patvirtinta)

    if (submittedAge >= 18 && submittedAge <= 30 && !isConvicted) {  //patikrins ar am=ius geras ir ar netesitas
result.textContent = "Armija taves laukia";
    } else {
        result.textContent = "Nesaukiamas esi i armija";
    }
}

form.addEventListener("submit", handleFormSubmit);

