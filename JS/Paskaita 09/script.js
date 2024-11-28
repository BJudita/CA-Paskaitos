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

 
 console.log("-- Sukurkite dvi funkcijas: viena grąžina random skaičių nuo 1 iki 10 (įskaitant), kita – gautą skaičių pakelia kvadratu. Iškviesk abi funkcijas vienoje eilutėje");

 let findRandom = () =>  Math.floor((Math.random() * 10) + 1) ;

 const randomNumber = findRandom();

 let  squareRandom = () => randomNumber * randomNumber;

 console.log(randomNumber + " squared: " + squareRandom(randomNumber));
 

 console.log("-- Parašykite funkciją convertMStoKMH, kuri konvertuoja greitį iš metrų per sekundę į kilometrus per valandą.");
 
 // let convertMStoKMH = (speed) => speed * 3.6; 
 function convertMStoKMH(speed) {   
  return speed * 3.6;
 }

 console.log(convertMStoKMH(1));
 
 console.log("-- Parašykite funkciją compareNumber, kuri palygina du skaičius ir grąžina didesnįjį iš jų. Jei skaičiai yra lygūs, funkcija turėtų grąžinti lygus. Įsitikinkite, kad abu argumentai yra skaičiai; jei ne, grąžinkite klaidos pranešimą.");

 function returnbigerNumber(nr1, nr2) {
  if (nr1 < nr2 && (typeof nr1 ==="number" || typeof nr2 === "number")) {
 console.log(nr2);
  } else if (nr1 > nr2) {
    console.log(nr1);
      } else if (nr1 === nr2){
console.log("Lygūs");
      } else {
        console.log("Klaida, tai nėra skaičius");
      }
 }
 returnbigerNumber(5, 22);

 console.log("-- Parašykite funkciją isLeapYear, kuri priima year ir pasako ar metai yra keliamieji. Funkcija turi grąžinti true, jei metai keliamieji, ir false priešingu atveju.");

function isLeapYear(year) {
  if  ((year % 4 === 0 && year % 100 === 0) || year % 4000 === 0){
    console.log("true")
  }
  else{
    console.log("false")
  }
  }

isLeapYear(2000);


 console.log("-- Parašykite funkciją findMaxInArray, kuri ras ir grąžins didžiausią elementą masyve. Galime daryti prielaidą, kad visi array elementai yra skaičiai.");

const array = [15, 22, 1021, 5, -1, 56, 11, 454, 54];
let result = array[0];

function findMaxArray(array) {
  for (let i = 1; i < array.length; i++) {
    if (result < array[i]) {
          result = array[i] ;
    }
  }
}
findMaxArray(array);
console.log(result);

 console.log("-- Parašykite funkciją sumArray, kuri suskaičiuoja ir grąžina visų elementų sumą masyve. Kaip ir užduotyje prieš tai, galime daryti prielaidą, kad visi array elementai yra skaičiai.");
let array2 = [1, 2, 3, 4, 5];
let sum = 0;

function sumArray(array2) {
  for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
  }
}
sumArray(array2);
console.log(sum);

 console.log("-- ");

 let array3 = [1, 2, 3]; 
 let array4 = [1, 2, 3];


 function arMasyvaiLygus(array3, array4) { // shorter solution, for simple arrays
  if (array3.toString() === array4.toString()) {
    console.log("true");
      } else {
        console.log("false");
        
      }
 }

 function arMasyvaiLygus(array3, array4) {
  if (array3.length !== array4.length) {
    console.log("false");
    return;
  } 
    for (let i = 0; i < array3.length; i++) {
      if (array3[i] !== array4[i]) {
        console.log("false");
        return;
      } 
   }
      console.log("true");
}
  
   arMasyvaiLygus(array3, array4);
  

 console.log("-- Eilutes apvertimas"); 
 let reverted = "";
 function revertString(string) {
  for (let i = string.length - 1; i >= 0; i--) {
  reverted += string[i]
 }
   }
revertString("Labas");
console.log(reverted);
 
 console.log("-- Parašykite funkciją arPalindromas, kuri tikrina, ar žodis yra palindromas. Funkcija turi grąžinti true, jei žodis yra palindromas, priešingu ateju  ---");
 
 let reversed = "";
 function arPalindromas(word) {
  for (let i = word.length -1; i >= 0; i--) {
    reversed += word[i];
  }
    if (reversed  === word) {
    console.log("true");
   } else {
    console.log("false");
   }
  }
  
 arPalindromas("savas")

 
 console.log("-- "); 
 function printPyramid() {
  let rows = 3;
 ;

  for (let i = 1; i <= rows; i++) { 
    let pyramid = "";
    for (let j = 1; j<= i; j++) {
      pyramid += i +  " ";
    }
    console.log(pyramid);
    
  }
 }
 printPyramid();
 
 console.log("-- ");

