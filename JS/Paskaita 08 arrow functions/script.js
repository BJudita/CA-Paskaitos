console.log("-- Ne visos funkcijos turi return statement (nors dažniausiai taip yra). Sukurkite funkciją, į kurią paduosite vardą ir parodysite panaudodami alert.");

let returnName = (name) => name ;

 console.log(returnName("Judita"));

 console.log("-- Taip pat ne visos funkcijos turi parametrus – sukurkite funkciją, kuri sugeneruos ir grąžins random skaičių tarp 1 ir 5.");

 let returnRandomNr  = (random) => Math.floor((Math.random() * 5) + 1);

 console.log(returnRandomNr());


 console.log("-- Sukurkite funkciją, kuri paims du parametrus – vardą ir pavardę, tada grąžins sumą šių žodžių ilgių ");

 let returnLength = (name, surname) => name.length + surname.length;
console.log(returnLength("Judita", "Baliukynaite"));
 
 console.log("-- Sukurkite funkciją, kuri pagal paduotą skaičių grąžins abėcėlės raidę");
 
 const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let alphabetLetter = (alphabet) => alphabet[9];
  console.log(alphabetLetter(alphabet));
  

 console.log("-- Sukurkite funkciją, kuri paims tris parametrus (n1, n2, operator). Operator gali būti sum, sub, div, multi (matematinės reikšmės – sudėti, atimti, padalinti, padauginti). n1 ir n2 bus skaičiai. ");
 
 let calculation = (n1, n2, operator) => {
switch (operator) {
  case "sum":
    return n1 + n2;
    case "sub":
    return n1 - n2;
    case "div":
    return n1 / n2;
    case "multi":
    return n1 * n2;
}
} 
 console.log(calculation(5, 9, "sum"));
 console.log(calculation(15, 6, "sub"));
 console.log(calculation(4, 9, "div"));
 console.log(calculation(12, 9, "multi"));

 
 console.log("-- Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje");

 let findRandom = () =>  Math.floor((Math.random() * 10) + 1) ;

 const randomNumber = findRandom();

 let  squareRandom = () => randomNumber * randomNumber;

 console.log(randomNumber + " squared: " + squareRandom(randomNumber));
 

 