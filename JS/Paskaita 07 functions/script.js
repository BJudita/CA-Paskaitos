function returnName(name) {
  alert(name);
}
// returnName("Judita");

console.log("-- Taip pat ne visos funkcijos turi parametrus  sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.");

function random() {
  return Math.floor(Math.random() * 5) + 1;

}

console.log(random());

console.log("-- Sukurkite funkciją, kuri paims du parametrus  vardą ir pavardę, tada grąžins sumą šių žodžių ilgių (t.y. Petras Slekys 12).");

function fullName(name, surname) {
 return name.length + surname.length;
}

console.log(fullName("Judita", "Baliukynaite"));

console.log("-- Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę");

function returnLetter() {
  const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return alphabet[9];
 }

 console.log(returnLetter());
 
 console.log("-- Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator)");

 function returnMathOperation(n1, n2, operator) {
   if (operator === "sum") {
     return n1 - n2;
   } else if (operator === "multi") {
      return n1 * n2;
   } else if (operator == "sub") {
      return n1 - n2;
   } else if (operator === "div") {
    return n1 / n2;
   }
 
 }
 console.log( returnMathOperation(5, 2, "sum"));
 console.log( returnMathOperation(3, 9, "multi"));
 console.log( returnMathOperation(12, 115, "sub"));
 console.log( returnMathOperation(181812633, 9, "div"));

 function returnMathOperationSwitch(n1, n2, operator) {
  switch (operator) {
    case "sum":
    return n1 - n2;
    case "multi":
     return n1 * n2;
    case "sub":
     return n1 - n2;
    case "div":
   return n1 / n2;
  }
}

 console.log( returnMathOperationSwitch(5, 2, "sum"));
 console.log( returnMathOperationSwitch(3, 9, "multi"));
 console.log( returnMathOperationSwitch(12, 115, "sub"));
 console.log( returnMathOperationSwitch(181812633, 9, "div"));
 

 console.log("-- Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita:  gautą skaičių pakelia kvadratu.");

function returnRandom() {
  return Math.floor(Math.random() * 10 + 1) ;
  }  

function toSquare(number) {
    return number * number;
  }
const randomNumber = returnRandom();

console.log(randomNumber + " , pakelta kvadratu: " + toSquare(randomNumber));