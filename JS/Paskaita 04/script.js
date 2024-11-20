for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// du variantai virsuje paprastesnis. reikia i6gauti tik lyginius skai2ius

for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("----- uzduotis 2");
// nekiekvieno ciklo rezultat1 reikia i6vesti, bet tik paskutin5 tod4l console yra ne if skliaustuose

const laugh = 4;
let ha = "";

for (let i = 0; i < laugh; i++) {
  ha += "ha";
}
console.log(ha + "!");

// trumpas b8das vietoje for

let ha2 = "ha".repeat(laugh) + "!";
console.log(ha2);

console.log("---- uzduotis 3");

for (let x = 9; x >= 1; x--) {
  console.log("hello " + x);
}


// ----- u=duotis 1
console.log("----- uzduotis cao 1");

for (let i = 0; i < 10; i++) {
  console.log("Judita");
  }

const name = 'Judita';
const count = 10;
for (let i = 0; i < count; i++) {
  console.log(name);
}

for (let i = 0; i < 10; i++) {
  console.log(i + "." + " Judita");
  }

  for (let i = 10; i >= 1; i--) {
    console.log(i);
    
  }

  // while and do while

let i = 0;

  while (i < 3) {
    console.log("Judita");
    i++;
    
  }

  const name1 = 'John';
let y = 3;
while (y > 0) {
  console.log(name1);
  y--;
}

let combo = "";
let name3 = "Judita";
let times = 5;

do {
  combo += name3;
  times--;
} while (times > 0 ) {
 console.log(combo);

}