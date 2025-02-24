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

  const adult = people1
  .filter((n) => n.age >= 18)
  .sort((a, b) => a - b);
console.log(adult);

// short version atsakymas
console.log(people1.filter(x => x.age >= 18))
