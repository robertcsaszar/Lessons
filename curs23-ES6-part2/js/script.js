const numbers = [5, 7, -2, 4, 8, 9, 13];
// even numbers from "numbers" array will be added here
let evens = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evens.push(numbers[i]); // adds numbers[i] at the end of the evens array
  } 
}

console.log('after for', evens);

evens = [];
numbers.forEach(function(currentElement) {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});

console.log('after forEach', evens);

evens = [];
numbers.forEach((currentElement) => {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});
console.log('after forEach with arrow function', evens);


// Lexical this
window.onload = function() {
  const button = document.getElementById("myelement");
  
  this.clicked = 0;
//   button.addEventListener("click", function() {
//     console.log('this inside event handler',this);
//     this.clicked++;
//     // same as: this.clicked = this.clicked + 1;
//     console.log("button clicked " + this.clicked + " times");
//   });
  
//   const that = this;
//   button.addEventListener("click", function() {
//     console.log('this inside event handler',this);
//     that.clicked++;
//     // same as: this.clicked = this.clicked + 1;
//     console.log("button clicked " + that.clicked + " times");
//   });
  
  button.addEventListener("click", () => {
    // same this as in the surrounding scope
    this.clicked++;
    console.log("button clicked " + this.clicked + " times");
  });
};


console.log("---------- CLASSES -----------");

class Animal {
  // special method used for object creation and initialization
  // only one per class
  // this is the one that's called when using "new"
  constructor(options) {
    options = options || {};
    
    this.name = options.name;
    this.color = options.color;
    this.weight = options.weight;
    this.height = options.height;
    this.legs = options.legs;
  }
  
  eat() {
    console.log("nom nom, animal is eating");
  }
  
  speak() {
    console.log("hello, animal is speaking");
  }
  
  // define getter methods
  get biometricData() {
    return "This animal is " + this.height + 
      " tall and weights " + this.weight;
  }
  
  // define setter methods
  set biometricData(data) {
    // data will have the format [height, weight];
    this.height = data[0];
    this.weight = data[1];
  }
  
  // static method
  static SIT() {
    console.log("Sitting from a static method");
  }
}

// create Animal instance
const fulga = new Animal({
  name: "Fulga",
  color: "purple",
  weight: "200kg",
  height: "1.80m",
  legs: 4
});
console.log("Fulga", fulga);

// invoke class methods
fulga.eat();
fulga.speak();

// use getter
// property, not method!
console.log(fulga.biometricData);

// use setter
// property, not method
// the value assigned should be in the format expected by the setter
fulga.biometricData = ["2m", "250kg"];
console.log(fulga);

// calling a static method
// static methods are available on the class directly, not on the instances
Animal.SIT();
// !!!NOT fulga.SIT();!!!

console.log("---------- INHERITANCE----------");

// define child class
// it extends Animal super class / parent class
class Dog extends Animal {
  // constructor function is optional in child class
  constructor(options) {
    // need to call super method
    // it calls the constructor of the parent class
    super(options);
    this.legs = 4;
    this.breed = options.breed;
  }
  
  // method overriding
  speak() {
    console.log("Ham Ham!");
  }
}

const nero = new Dog({
  name: "Nero",
  color: "white and brown",
  height: "50cm",
  weight: "50kg",
  breed: "Ciobanesc Bucovinean"
});

console.log("Nero", nero);
nero.speak();
nero.eat();











