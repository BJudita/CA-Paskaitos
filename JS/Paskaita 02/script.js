
console.log("laivas" === "laivas");


const number = 10;
const text = "10";

const sudetis = number === text;
const tiesa = number || text;
const netiesa = number > 9 && text < 9;

console.log(sudetis, tiesa, netiesa);


const currentBalance = 50;
let transaction = 50;

console.log(currentBalance === transaction);
console.log(currentBalance > 20 && transaction < 90);

transaction = 51;

console.log(currentBalance === transaction);
console.log(currentBalance > 20 && transaction < 90);

console.log(transaction % 5);



