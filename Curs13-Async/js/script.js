var x = 2;

// var result0 = suma(x, 4);
var result1 = sum(x, 4);

// console.log("Sum Function", suma);
// console.log("Result_0", result0);
// console.log("Result_1", result1);

 function sum(a, b){
  return a + b
}

var result2;

console.log("Before Set Timeout");
setTimeout(function(){ console.log("Inside"); var result = sum (x, 3)}, 1000);
console.log("After Set Timeout");
console.log("Result sum", result2);