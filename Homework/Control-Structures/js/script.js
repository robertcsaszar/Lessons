// Numbers from 1 to 20
var line = "";
for (var i = 1; i <= 20; i++) {
  line += i + " ";
}
console.log("Numbers:" + " " + line);

// Odd numbers from 1 to 20
// Mod all numbers from 1 to 20 with 2 and must not be equal with 0. - Line 13
// For example 1 mod 2 is 1 and 2 mod 2 is 0, so 1 mod 2 will be the first number displayed in console log as an Odd number.
var line = "";
for (var i = 1; i <= 20; i = i + 2 ) {
  line += i + " ";
}
console.log("Odd numbers:" + " " + line);

// Sum of the elements of an array
var a = [1, 2, 3, 4, 5, 2];
var total = 0;
for (var i = 0; i < a.length; i++) { 
  total += a[i]; 
}
console.log("Sum:" + " " + total);

// Maximum of the elements of an array
// @comment - here you should calculate the maximum value in a numeric array
var a = ["Robert", "Daniel", "Csaszar", 26, "Cluj"];
console.log("Total:" + " " + a.length);

// How many times a certain element appears in an array
// The count object will contain all the numbers from the array and it will display how many times a certain element appears in the array
// For example, 1: 3, this means 1 appears 3 times in the array
var list = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 5];
var count = {};
for (var i = 0; i < list.length; i++) {
  count[list[i]] = (count[list[i]] + 1) || 1;
}

console.log("Count: ", count);