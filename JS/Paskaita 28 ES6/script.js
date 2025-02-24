import carList from "./cars.js";
import exportHeader from "./header.js";
import multiplication from "./multi.js";

 const number = 2;
 let number2 = 6;

 let result = multiplication(number, number2);

 console.log(`The result of multiplying ${number} and ${number2} is ${result}`);
 
multiplication();

exportHeader(document.body); // prideda importuota header 






carList(document.body);
