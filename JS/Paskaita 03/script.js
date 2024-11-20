

  // const x = 10;

// if ( x > 5 ) {
// console.log("Skaicius did nei 5");
// } else {
//      console.log("mazesnis nei 5");
// }


//  const sk = 4;

//  console.log(sk % 2);
 
// if (sk === 0) {
//     console.log("nei tas nei tas");
//     } else if (sk % 2 === 0) {
//     console.log( "lyginis skaicius");   
//  } else {
//     console.log("nelyginis skaicius");  
//  }

 // 4 uzduotis 

 const muzikantuSk = 2;

 if (muzikantuSk <= 0) {
console.log("ne grupe");
 } else if (muzikantuSk === 1) {
console.log("soloe");
} else  if (muzikantuSk === 2) {
console.log("duetas");
} else  if (muzikantuSk === 3) {
 console.log("trio");
} else  if (muzikantuSk === 4) {
console.log("kvartetas");
} else {
console.log("didele grupe");
}

// switch tikrina paprastus, palygina su 1 antru ir pan. if yra lankstesnis tikrinime

const kazkas = 2;

switch (kazkas) {
    case 1:
    console.log("vienas");    
    case 2:
        console.log("du");
        break;
        // // galima apjunkti case
        // case 1:  
        // case 2:
        // console.log("mazas skaicius");
        // break;
        case 4:
            console.log("keturi");
            break;
         default:
            console.log("neaisku");

}

//Maziausia salis

// const maziausiaSalis = prompt("Kokia yra maziausia pasaulyje salis?")

// if (maziausiaSalis === "vatikanas") {
//     console.log("Teisingai!");    
// } else {
//     console.log("Rimtai? Taigi Vatikanas!"); 
// }

// if i ?

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// let result = (a + b < 4) ? 'Below' : 'Over';


// const message = (login == "Employee") ? "Hello" : 
// (login == "Director") ? "Greetings" :
// (login == "") ? "No login" :
//  "";



 // Pilnameciai 

//  const legalAge = 20;
//  const clientAge = 12;

//  if (clientAge >= legalAge) {
//     console.log(`klientas jau pasiekes ${legalAge}`);
    
//  } else {
//     console.log(`klientas nepasiekes ${legalAge}`);
//      }


     // ilgas varads

     const vardas = "Judita";

     if (vardas.length > 6) {
        console.log("Ilgas vardas");
     } 

     // ar didelis 

     const age = 30;

     if ( age > 100 || age < 0) {
        console.log("Invalid age");
        
     } else if (age < 18) {
console.log("Child");

     } else {
        console.log("Adult");
        
     }

     // Automobiliai

     const car = "Audi";

     if (car === "Audi" || car === "VW" || car === "Bentley" || car === "Bugatti" || car === "Lamborgini" || car === "Porsche") {
        console.log("Priklauso VW grupei");
        
     } else if ( car === "BMW" || car === "Mini" || car === "Rolls_Royce") {
        console.log("Priklauso BMW grupei");
        
     } else {
        console.log("Nei vienai nepriklauso");
        
     }

     // Short or long

     const name = "Judita";

     if (name.length < 5) {
        console.log("Short name");
        
     } else {
        console.log("Long name");
        
     }

     // Ar galima vairuoti

     const clientAge = 150;
     const legalAge = 18;

    //  if (clientAge >= legalAge) {
    //     console.log("Can drive");
        
    //  } else {
    //     console.log("Can't drive");
        
    //  }

     // -1 amzius

clientAge < 0 || clientAge > 120 ? console.log("Invalid Age") : clientAge >= legalAge ? console.log("can drive") : console.log("Can't drive");
;


// Phone

const phone = "iPhone";

const isIphoneUser = phone === "iPhone";

// Loginiai operatoriai
// 1

 if (age >= 14 && age <= 90) {
    console.log(age);
}

if (!(age >= 14 && age <= 90)) {
   console.log(age);
   
}

if (age <= 14 || age >= 90) {
   console.log(age);
}

const browser = "edge";

if(browser == "edge") {
   console.log("RIP Edge!");
}  else if  (browsesr == "chrome"
   || browsesr == "Firiefox"
   || browsesr == "Safari"
   || browsesr == "Opera" ){
   console.log("^ios nar6ykl4s palaikomos");
   } else {
      console.log("tikimes, kad sis puslapos atrodys puikiai");
      
   }


   let a = +prompt("a?", "")
   switch(a) {
      case 0:
      console.log(0);
      break;
      case 1:
      console.log(1);
      break;
      case 2:
      case 3:
      console.log("2,3");
      break;
   }

   const car = "BMW";

   switch(car) {
      case "VW":
      case "Audi":
      case "Bentley":
      case "Bugatti":
      case "Lamborgini":
      case "Porsche":
         console.log("VW Group");
      break;

      case "BMW":
      case "Mini":
      case "Rols-Royce":
         console.log("BMW Group");
      break;

      default:
         console.log("Nei VW group, nei BMW group");
         
   }


  const userInput = "smidras";
  switch (userInput) {
   case "Obuolys":
   case "kriause":
   case "apelsinas":
   case "kiwis":
   case "mangas":
      console.log("vaisius");
   break;
   case "Morka":
      case "Agurkas":
      case "Kopustas":
      case "bulve":
      case "smidras":
         console.log("darzove");
      break;
      default:
         console.log("Nei daržovė, nei vaisius")
  }

  
  let weekday = 5;
  switch(weekday) {
   case 0:
      weekday = 'Pirmadienis';
      break;
   case 1:
         weekday = "Antradienis";
         break; 
 case 2:
      weekday = "Treciadienis";
   break;  
   case 3:
      weekday = "Ketvirtadienis";
   break;  
   case 4:
      weekday = "Penktadienis";
   break; 
   case 5:
      weekday = "Sestadienis";
   break;       
   case 6:
      weekday = "Sekmadienis";
   break;
  }
  console.log(weekday);