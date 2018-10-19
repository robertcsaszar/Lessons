// Empty object
var robot = {};
console.log("Robot = ", robot);

// Object with property
var robot = {
  model: 'TRX3024',
  weight: 100
};
console.log("Robot = ", robot);

// Add new property
robot.color = "red";
console.log("Robot = ", robot);

// Update property
robot.weight = 99;
console.log("Robot = ", robot);

// Delete property
// delete robot.model;
// console.log("Robot = ", robot);

// Adding function in property
var robot = {
  model: 'TRX3024',
  weight: 100,
  run: function () {
    console.log("The robot is running");
  }
};
console.log("Robot = ", robot);
// Call robot method
robot.run();

// Typeoff
var name = "Robert";
console.log("Type of string", typeof name);

var age = 10;
console.log("Type of string", typeof age);

var isNull = null;
console.log("Type of string", typeof isNull);

var isUndefined;
console.log("Type of string", typeof isUndefined);

var list = []
console.log("Type of array", typeof list);

// IF STATEMENT
var x = -10;
if (x > 0) {
  console.log("Positive number x = ", x); 
    } else {
      console.log("Negative number x = ", x);
    }

var x = 0;
if (x > 0) {
  console.log("Positive number x = ", x); 
    } else if (x === 0) {
      console.log("x = ", x);
    }else {
      console.log("Negative number x = ", x);
    }

var currentTime = prompt("Enter time");
console.log(currentTime);
if (currentTime < 10) {
  console.log("Buna dimineata!");
} else if (currentTime <= 18) {
  console.log("Buna ziua!");
} else {
  console.log("Buna seara!")
}

// FOR STATEMENT
for (var i = 0; i <= 10; i++) {
  console.log("Index = ", i);
}

// First try
for (var i = 1; i <= 5; i++) {
  console.log("Index = ", i, i * 2, i * 3, i * 4, i * 5);
}

// Correct way
for (var i = 1; i <= 5; i++) { 
//   console.log("Line = ", i);
  var line = "";
  for (var j = 1; j <= 5; j++) { 
//     console.log("Column = ", j);
    line += (i * j) + " ";
//     console.log("Value = ", value);
  }
  console.log("LINE", line);
}

