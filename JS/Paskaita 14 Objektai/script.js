// SORT()

// visi trys gr1=ina did4jimo tvarkka apart sort(), jis utf koduot1 naudoja kuri n4ra itin tiksli
const nums = [30, 5, 12, 1, 8];
// 1
nums.sort();
console.log(nums);
// 2
nums.sort((a, b) => a - b);
console.log(nums);
// 3 same as 2 jut longer
const result = nums.sort((a,b) => {
  return a - b; // b - a atvirksciai isrikius, maz tvarka
});
console.log(result);
// visi trys  gr1=ina did tvarka

// string8 rikiavimas ma= tvarka
const words = ["apple", "banana", "orange", "pear"];
words.sort((a, b) => {
  return b.length - a.length;
});
console.log(words);

// pagal konkre2ia savybe 
const people = [  { name: "Alice", age: 25 },  { name: "Bob", age: 30 },  { name: "Charlie", age: 20 }];

people.sort((a, b) => {
  return a.age - b.age;
});
console.log(people);

// isrikiuoti abeceles tvarka
const friendsNames = ["Laura", "EveLina", "Viktorija", "Ieva", "Karolina"];

friendsNames.sort();
console.log(friendsNames);

// z-a tvarka
friendsNames.sort((a, b) => b.localeCompare(a)) ;
console.log(friendsNames);

// mazejimo tvarka
 const arrMaz = [5, 10, 20, 11, 12, 1, 0, 14, 25] ;

 arrMaz.sort((a, b) => b - a);
 console.log(arrMaz);
 
// did skaiciu grazinti
const biggestNum = [10, 5, 20, 4] ;

biggestNum.sort((a, b) => {
  return b - a;
});
console.log(biggestNum[0]);


// REDUCE()

const arr = [[1, 2], [3, 4], [5, 6]];
const flattened = arr.reduce((acc, cur) => [...acc, ...cur]); // ... spread operatorius sujungia kelis array 5 vien1
console.log(flattened);

// Objektų grupavimas pagal savybę
const people2 = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 30 },
];
const grouped = people2.reduce((acc, cur) => {
  const key = cur.age;
  return { ...acc, [key]: [...(acc[key] || []), cur] };
}, {});
console.log(grouped);

console.log("----------");
// array mapinimas ir filtravimas
const nums3 = [1, 2, 3, 4, 5];
const doubledEvens = nums3.reduce((acc, cur) => {
  if (cur % 2 === 0) {
    const doubled = cur * 2;
    return [...acc, doubled];
  }
  return acc;
}, []);
console.log(doubledEvens);

// Chaining array methods
const nums4 = [1, 2, 3, 4, 5];
const result4 = nums4
  .filter((n) => n % 2 === 0)
  .map((n) => n * 2)
  .reduce((acc, cur) => acc + cur, 0);
console.log(result4); // 12


// u=suotis

const people1 = [
  {
    name: "Petras",
    age: "18"
  },
  {
    name: "Jonas",
    age: 15
  },
  {
    name: "Antanas",
    age: 20
  },
  {
    name: "Urtė",
    age: 10
  },
  {
    name: "Diana",
    age: 25
  },
  {
    name: "Ieva",
    age: 16
  }
];
// mano sprendimas tikrinami pilnameciai
const adult = people1
.filter((n) => n.age >= 18)
console.log(adult);

// short version atsakymas
console.log(people1.filter(x => x.age >= 18))

// tikrinami vardai
console.log(adult.map((person) => person.name));

console.log(people1.filter((n) => n.age >= 18).map((person) => person.name).sort((a, b) => a.localeCompare(b)));

// prekes
const drinks = [
  {name: "lemonade", price: 50}, 
  {name: "lime", price: 10}
];

function fn(items) {

  items.sort((a, b) => a.price - b.price)
  return {pigiausias: items[0].name, brangiausias: items[items.length -1].name} 
}
console.log(fn(drinks));




// last uzduotis

const numbers = [2, 3, 5, 7, 11];

const newArr = numbers.reduce((acc, cur, index) => {
if (index === 0) {
  acc.push(cur);
  return acc;
} 

const previousSum = acc.reduce((a, c) => a + c)
const rez = previousSum + previousSum * cur;

acc.push(rez);

return acc
}, [])
console.log(newArr);


// OBJEKTAI
// Asmuo

function createPerson(name, lastname, age) {
  return {
    name,
    lastname,
    age,
  };
};
console.log(createPerson("Jonas", "Jonaitis", 30));

// Automobilio informacija

const printCarInfo = (car) => {
  return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
};
console.log(printCarInfo({brand: "Toyota", model: "Corolla", year: 2002}));

// Darbuotoj7 ataskaita
const printEmployeeInfo = (workers) => {
 const names = Object.keys(workers);
 names.forEach(name => {
  console.log(`Name: ${name}, Position: ${workers[name]}`);
 });
};
printEmployeeInfo({ "Jonas": "Engineer", "Petras": "Manager" });

// Knyg7 paie6ka
const books = [
{
title: "Haris Poteris ir išminties akmuo", 
author: "J.K. Rowling" 
}, 
{ 
  title: "Hobitas", 
  author: "J.R.R. Tolkien"
}
];

const keyword = "Poteris";
const findBookByTheTitle = books.filter((book) => book.title.toLowerCase().includes(keyword.toLowerCase()));
console.log(findBookByTheTitle);

// studentu grupiu balai

const countAverages = (groups) => {
 const averages = {};
 for (const group in groups) {
 const scores = groups[group];
 const total = scores.reduce((sum, score) => sum + score, 0);
 averages[group] = total / scores.length;
 }
  return averages;
};

console.log(countAverages({ "Group A": [80, 90, 100], "Group B": [70, 80, 90] }));