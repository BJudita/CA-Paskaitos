console.log("-------- svarankiškos užduotys 06 ----------");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}  
console.log("Sukurkite JavaScript programą, kuri suskaičiuoja sumą nuo 1 iki 5 naudojant while ciklą.");

let sum = 0;
let i = 1;
while (i <= 5) {
 sum += i;  //sum = sum + i
   i++;
}
  console.log(sum);

  console.log("Parašykite JavaScript for ciklą, kuris atspausdina visus lyginius skaičius nuo 2 iki 10.");

    for (let i = 2; i <= 10; i++) {
       if (i % 2 === 0) {
        console.log(i);
       } 
  } 
  console.log("Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka");

  for (let i = 10; i > 0; i--){
    console.log(i);
    
  }
  console.log("Parašykite JavaScript ciklą, kuris atspausdina skaičius nuo 10 iki 1 atbuline tvarka.");

  let a = 1;
let suma = 0;
  while (a <= 20) {
    if (a % 3 == 0){
 suma++ // kiek kartu a padalinta is 3
    }
    a++ //
  }
  console.log(suma);

  console.log("Parašykite JavaScript programą, kuri randa didžiausią skaičių iš masyvo naudojant for ciklą.");

let skaicius = [50, 2, 6, 99, 125, 1222, 52, 12, 1, 14, 111]
let didSkaicius = skaicius[0]; // didSkaicius prasideda kaip numeris, nes prie6 tai didSkaicius = [];, nors ire veik4, ta2iau ra neteisingas nes yra array vietoje skaiciaus

for (i = 0; i < skaicius.length; i++) {
  if (didSkaicius < skaicius[i]){
    didSkaicius = skaicius[i];
  }
}
console.log(didSkaicius);

console.log("Sukurkite JavaScript funkciją, kuri išspausdina visus skaičiaus 15 daliklius.");

let daliklis = 15;

for (let i = 1; i <= daliklis; i++) {
  if (daliklis % i === 0) {
    console.log(i);
    }
}

console.log("Sukurkite JavaScript programą, kuri naudojant for ciklą išfiltruoja ir atspausdina visus nelyginius skaičius iš masyvo [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Nelyginius skaičius saugokite naujame masyve oddNumbers");

let oddNumbers = [];
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayNumbers.length; i++) {
  if (arrayNumbers[i] % 2 !== 0) {
 oddNumbers.push(arrayNumbers[i]);
  }
  
  }
  console.log(oddNumbers);
  
  console.log("Parašykite JavaScript ciklą, kuris atspausdina visus pirminius skaičius nuo 1 iki 20.");


 for (let i = 2; i <= 20; i++) {
  let isPrime = true;
  for (let j = 2; j < Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    } 
  }
    if (isPrime) {
      console.log(i);
      
    }
 }

 

  console.log("Parašykite JavaScript programą, kuri naudojant for ciklą atspausdina pirmus dešimt Fibonačio sekos skaičius.");

let fib = [0, 1];

for (let i = 2; i < 10; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log(fib);



console.log("---------");

let rainDrops = [5, 6, 4, 3, 7, 55, 8, 21, 35, 701];
for (i = 0; i < rainDrops.length; i++) {
  let sound = "";
  if (rainDrops[i] % 3 === 0) {
sound += "Pling"; 
   } 
  if (rainDrops[i] % 5 === 0) {
    sound += "Plang";
  } 
  if (rainDrops[i] % 7 === 0) {
    sound += "Plong";
  } 
  if (sound !== "") {
    console.log(sound);
  }  else {
    console.log(rainDrops[i]);
  }
}
