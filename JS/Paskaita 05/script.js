const people = [1, 5, 8, "asdf", true, [1, 5]];

console.log(people[0]);

//pakeisti arejaus reiksme 
people[4] = false;

console.log(people[4]);

console.log(people.length);

//Prideti papildoma elementa/ar daugiau prie esamo array galo
people.push("Nauja reiksme", 9);

console.log(people);

//Prideti papildoma elementa/ar daugiau prie esamo array pradzios
people.unshift("Nauja reiksme", 19);

console.log(people);

//Isimti elementa is array galo 1-a elementa
const galineReiksme = people.pop();

console.log(galineReiksme);

//Isimti elementa is array priekio 1-a elementa
const priekineReiksme = people.shift();

console.log(priekineReiksme);

//Isimti konkretu elementa is array  nuo kurio elemento, kiek elementu, prideda j7 vietoje nauja
const deleted = people.splice(2, 2, "Kazkas naujo");

console.log(deleted);

console.log(people);


// antras array - slice nekeicia originalo
 const array0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 const slicearr = array0.slice(1, 4);
 console.log(slicearr);
 
 console.log(array0);
 

 // sud4ti du ar4jus
arr1  = [1, 2, 3];
arr2  = [1, 2, 3];

const rez = arr1.concat(arr2);
 console.log(rez);



const arr3 = ["labas", "kazkas", "kakaka"]
const arr33 = [1, 1, 2]
//padaro kopija ir iskleidzia array / galima prid4ti dar papildomus array
const arr4 = [...arr3, ...arr33];
console.log(arr4);

// i6skleidzia arry i stringa 
console.log(...arr3);
// old budas: const arr4 = JSON.parse(JSON.stringify(arr3))


console.log("------ uzduotys");

const numbers = [12, 45, 2, 67, 33];

let result = numbers[0];

for(let i = 1; i < numbers.length; i++) {
  if (result < numbers[i]) {
result = numbers[i];
  }
}

console.log("didziausias skaicius", result);


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 25, 80];

const evenNumbers = [];
// what does num[i] means
for(let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) {
    evenNumbers.push(nums[i]);
  }
}

console.log(evenNumbers);



const colors = ["red", "blue", "green", "yellow", "purple"]

const reverstColors = [];

// for(let i = colors.length - 1; i >= 0; i--) {
//   reverstColors.push(colors[i]);
// }
//abu b8dai teisingi
for(let i = 0; i < colors.length; i++) {
  reverstColors.unshift(colors[i]);
}

console.log(reverstColors);

console.log('--------- savarankiskos uzduotys ----------');

const array = [2, 3, 4];

array.unshift(1);

console.log(array);

const elementai = [1, 2, 2, 3, 3, 3, 4];

const skirtingi = [];

for(let i= 0; i < elementai.length; i++) {
if (!skirtingi.includes(elementai[i])) {
  skirtingi.push(elementai[i]);
}
  
}
  console.log(skirtingi.length);

const elements = [-3, 1, -2, 4, -5, 6] ;

const even = [];
for (let i = 0; i < elements.length ; i++) {
 if (elements[i] > 0) {
even.push(elements[i])
  }
}
console.log(even);

// Pvz. 1
const arr01 = [1, 2, 3, 4, 3, 5];
const element1 = 3;
const repeat = arr01.indexOf(element1) !== arr01.lastIndexOf(element1);

console.log(repeat);

// true

// Pvz. 2
const arr02 = [1, 2, 3, 4, 5];
const element2 = 6;
const repeat2 = arr02.indexOf(element2) !== arr01.lastIndexOf(element2);

console.log(repeat2);


const masyvas = [1, 2, 3, 4, 5];

const changedMasyvas = [];

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] % 2 === 0) {
    changedMasyvas.push(masyvas[i] / 2);
  } 
}

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] % 2 !== 0) {
    changedMasyvas.push(masyvas[i] * 3);
  }
}
console.log(changedMasyvas);
// Easier way:

// for (let i = 0; i < masyvas.length; i++) {
//     if (masyvas[i] % 2 === 0) {
//       changedMasyvas.push(masyvas[i] / 2);
//     } else {
//       changedMasyvas.push(masyvas[i] * 3);
//     }
// }

// console.log(changedMasyvas);
