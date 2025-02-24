// elementu pridejimas
const addElement = (masyvas, naujas) => {
  masyvas.push(naujas);
  return masyvas;
}
console.log(addElement([1, 2, "arr", 4], "Labas"));

// sujunkti du masyvus i viena
const mergeArrays = (a, b) => { 
  // or const mergeArrays = (a, b) => [...a, ...b];
 const newArray = a.concat(b);
 //or
 return newArray;
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

//Keliu elementu pridejimas
 const addMultipleElements = (masyvas, ...papildomi) => {
  const newArrAdditional = [...masyvas, ...papildomi];
  return newArrAdditional;
 }
 console.log(addMultipleElements([1, 2, 3], 4, 5, 6));

 //Masyvo elementu modifikavimas
const doubleNumbers = [1, 2, 3];
 const newDArray = doubleNumbers.map((numbers) => numbers * 2);

 console.log(newDArray);

 //Unikalus elementai

 const numbers = [1, 2, 2, 3, 4, 4, 5];

 const findUnique = numbers.filter((value, index, self) => self.indexOf(value) === index);

 console.log(findUnique);
 

 // kelion4 mar6ruto planavimas

 function planTrip(load) {
  const  weight = load.reduce((acc, curr) => acc + curr) ;
 
  if (weight <= 200) {
   return true;
    }else {
     return false;
    }
 }

// in short
// const planTrip = (items) => items.reduce((acc, curr) => acc + curr, 0) <= 200;

console.log(planTrip([30, 70, 90]));
console.log(planTrip([100, 85, 60]));

//Aptarnavimo eiles optimizavimas

function optimizeQueue(orders) {
  const alignedOrders = orders.sort((a, b) => a.size - b.size).map((orders) => orders.id);
  return alignedOrders
 }


console.log(optimizeQueue([{ id: 1, size: 5 }, { id: 2, size: 3 }, { id: 3, size: 8 }]));

// Dazniauisia pasikartojantis

const findMostFrequent = (elements) => {
  const counts = {};
  return elements.reduce((mostFrequent, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts[item] > (counts[mostFrequent] || 0) ? item : mostFrequent;
  }, null);
}
console.log(findMostFrequent([3, 7, 3, 1, 3, 7, 1, 1, 1, 1, 3]));

// Rasti trukstama skaiciu

