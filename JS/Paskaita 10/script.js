function convertToUpperCase(text) {
  console.log(text.toUpperCase());
 
}
 convertToUpperCase("Labas, k1 veiki");


 function extractSubstring(text) {
  console.log(text.slice(2, 7));
 }
 extractSubstring("Sveikas pasauli");

 function capitalizeFirstLetter(text) {
   let words = text.split(" "); // Split the text into words
   let result = "";

   for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word) {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    }
    if (i < words.length - 1) {
      result += " ";  // Add space between words
    }
   }
   console.log(result);
   
 }
 capitalizeFirstLetter("labas rytas, pasauli!");


function censorCurseWords(text, curseWords) {
  let  correctedMessage = text;
  
  for (let i = 0; i < curseWords.length; i++) {
    let word = curseWords[i];
    correctedMessage = correctedMessage.split(word).join("****");
  }

 console.log(correctedMessage)
}
censorCurseWords("This is a badword and another badword.", ["badword"])

 function milkPrice(price) {
  if (Number.isInteger(price)) {
    alert("nereikia smulkiu")
  } else {
    alert("pasimkite smulkiu")
  }
  alert(price.toFixed(2));
}
 milkPrice(3);


function findMax(...numbers) {
console.log(Math.max(...numbers));
}

findMax(1, 2, 222, 55, 4, 125, 101);


let isLeagalAge  = true;
console.log(isLeagalAge);
console.log(isLeagalAge.toString());

