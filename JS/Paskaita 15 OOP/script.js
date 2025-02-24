
function Car(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.turnOn = function (){
    alert("Vroom")
  }
}

const car1 = new Car("Toyota", "Corolla", "4D");
const car2 = new Car("BMW", "Rino", "5");

car1.turnOn();
car2.turnOn();

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

// Bazine klase

class Vehicle {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  information() {
    return `Brand: ${brand}, Model: ${model}`;
      }
}

class Car extends Vehicle { // isvestine klase
  constructor(brand, model, engineType) {
    super(brand, model)
    this.engineType = engineType;
  }
  information() {
      return `Brand: ${brand}, Model: ${model}, Engine type: ${this.engineType}`;
      }
}

class Bicycle extends Vehicle { // isvestine klase
  constructor(brand, model, hasEngine) {
    super(brand, model)
    this.hasEngine = hasEngine;
  }
  information() {
      return `Brand: ${brand}, Model: ${model}, Has engine: ${this.hasEngine}`;
      }
}