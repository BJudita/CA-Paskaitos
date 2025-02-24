
function Car(brand, model, engine, basePrice) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = basePrice // property
    this.turnOn = function (){ // method/as
    alert("Vroom")
  }
    this.getPrice = function () {
      if (this.engine === "electric") {
       additionalPrice = 10000;
      } else if (this.engine === "diesel") {
additionalPrice = 5000;
      } else {
        additionalPrice = 0;
      }
      return this.basePrice + additionalPrice;
    }
  
}

const car1 = new Car("Toyota", "Corolla", "diesel", 444000);
const car2 = new Car("BMW", "Rino", "electric", 2222222);
console.log(car1.getPrice()); // pasiima galutin3 kaina
console.log(car2.getPrice()); // pasiima galutin3 kaina

//car1.turnOn();
//car2.turnOn();

// bank account klase 

class BankAccount { // klase

  constructor(ownerName, balance = 0) { //savybes konstruktorius
    this.ownerName = ownerName;
    this.balance = balance;
  }
  
  deposit(amount) { // metodas
    this.balance += amount;
  }
  
  withdraw(amount) { //metodas
    this.balance -= amount;
  }
  }


  // PRAKTIKA
  console.log("----- Ptraktika------ Knygos klase");
  
   class Book {  // klase rasoma su konstruktoriumi
    constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
   }
   
   getSummary() {  // ne toks naudingas budas: this.getSummary = function () {
      return `${this.title} by ${this.author} published in ${this.year}`;
  };
}

    const book1 = new Book("Haylo", "Jane Austin", "1973");
    console.log(book1.getSummary());

    console.log("----- Muzikos studentas -----");

    class MusicStudent {
      constructor(name, instrument, level = "beginner") { // pagal nutylejima pridedamas standartinis lygis
        this.name = name;
        this. instrument = instrument;
        this.level = level;
      }

      practice() {
        if (this.level === "beginner") {
          this.level = "intermediate";
        } else if (this.level === "intermediate") {
          this.level = "advanced";
        }
}
      }
    
    const student = new MusicStudent("Anna", "piano");
    console.log(`${student.name}, ${student.instrument}, ${student.level}`);

    console.log("--- Prekiu krepselis ---");

    class ShoppingCart {
      constructor() {
        this.items = []; // masyvas kuriame bus atvaizduojami visi elementai
      }
      addItem(item) {
        this.items.push(item);
      }
      removeItem(itemName) {
        this.items = this.items.filter(item => item.name !== itemName)
      }
      calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0)
      }
    }

    const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal()); // Output: 2.28
cart.removeItem("Apple");
console.log(cart.calculateTotal()); // 1.29

console.log("--- Kino teatro vietu rezervavimas ----");

class MovieTheater {
  constructor(rows, seatsPerRow){
    this.seats = Array.from({length: rows}, () => Array(seatsPerRow).fill(false))
  }

  bookSeat(row, seat){
if (!this.seats[row][seat]) { // patikrina ar vieta laisva
  this.seats[row][seat] = true; // pazymi, jog vieta uzimta
  console.log(`Seat booked at row ${row}, seat ${seat} `);
}else {
  console.log("Seat is unavailable");
  
}
  }

  cancelBooking(row, seat){
 if (this.seats[row][seat]) { // tikrina ar vieta yra uzimta
  this.seats[row][seat] = false;
  console.log(`Booking canceled at row ${row}, seat ${seat}`);
 } else {
  console.log("Seat not booked");
 }
  }

  checkAvailability(row, seat) {
    return !this.seats[row][seat];
  }
}

const theater = new MovieTheater(5, 5);
theater.bookSeat(2, 3);
console.log(theater.checkAvailability(2, 3)); // false
theater.cancelBooking(2, 3);
console.log(theater.checkAvailability(2, 3)); // true
