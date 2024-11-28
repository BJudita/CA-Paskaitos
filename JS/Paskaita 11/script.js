
const arr1 = ["ass", "ddd", null, 0, 5, undefined, 5];
const rez1 = arr1.filter((ele) => ele !== null && ele !== undefined);
console.log(rez1);
//Remove Null or Undefined Values Filter out all null and undefined values from an array.

const arr2 = ["ass", "ddd", 5];
arr2.forEach((word) => console.log(word.length));

//Create a new array with only words containing the letter 'e'.
const arr3 = ["ases", "elfas", "e", "saf", "Elna"];

const rez3 = arr3.filter((str) => str.toLocaleLowerCase().includes("e"));
console.log(rez3);

//Convert all strings to uppercase, then filter out strings shorter than 5 characters.

const arr4 = ["asesvv", "elfas", "e", "saf", "Elna"];

const rez4 = arr4.filter((str) => str.length > 5).map((str) => str.toUpperCase());
console.log(rez4);

//Filter an array of numbers to get only odd numbers, then create a new array where each number is squared.
 
const arr5 = [1, 2, 4, 5, 6, 7, 8];
const rez5 = arr5.filter((num) => num % 2 !== 0).map((num) => num * num);

console.log(rez5);


function alertName(name) {
  alert(name);
}

function consoleName(name) {
  console.log(name);
  
}

function coreFunction(name, callback) {
  const editedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  callback(editedName);
}

coreFunction("judita", consoleName);

/// shorter version

function coreFunction2(name, callback) {
  callback(name[0].toUpperCase() + name.slice(1).toLowerCase()) ;
}
coreFunction2("edita", console.log);

const cars = ["BMW", "VW", "Audi"];
cars.forEach(name => console.log(name));

const positions = cars.map((car) => cars.indexOf(car) + ": " + car);

console.log(positions);


const names = ["laura", "eveLina", "ViktOrija", "ieva", "kArolina"];

const properNames = names.map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase());
console.log(properNames);


const ages = [29, 31, 30, 33, 12];

const legalAge = ages.filter((age) => age >= 18);
console.log(legalAge);


const cities = ["Vilnius", "Kaunas", "Kalvarija", "Daugai", "Alytus"];

console.log(cities.find((cityk) => cityk[0] === "K"));

console.log(cities.some((lowercase) => lowercase[0] === lowercase[0].toLowerCase()));

console.log(cities.every((lowercase) => lowercase[0] === lowercase[0].toUpperCase()));
