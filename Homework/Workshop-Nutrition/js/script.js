/* Input Method - Enter the customer's info and the result will be displayed in console log */

// var name = prompt("Enter your name");
// var gender = prompt("Enter your gender");
// var x = prompt("Enter your KG");
// var y = prompt("Enter your height in m");
// var BMI = (x / (y * y));
// if (BMI < 18.5) {
//   console.log(name + " | " + gender + " | " + "BMI:" + " " + Math.round(BMI) + " | " + "Underweight");
// } else if (BMI <= 25) {
//   console.log(name + " | " + gender + " | " +  "BMI:" + " " + Math.round(BMI) + " | " + "Normal");
// } else if (BMI <=30) {
//   console.log(name + " | " + gender + " | " +  "BMI:" + " " + Math.round(BMI) + " | " + "Overweight");
// } else {
//   console.log(name + " | " + gender + " | " +  "BMI:" + " " + Math.round(BMI) + " | " + "Obese")
// }

/* Customer info displayed in console log */

// Customers
var ion = {
  name: 'Ion',
  gender: 'M',
  weight: 55,
  height: 1.80,

}

var maria = {
  name: 'Maria',
  gender: 'F',
  weight: 55,
  height: 1.60,

}

var vasile = {
  name: 'Vasile',
  gender: 'M',
  weight: 91,
  height: 1.75,

}

var ioana = {
  name: 'Ioana',
  gender: 'F',
  weight: 70,
  height: 1.50,

}
 
var customers = [ion, maria, vasile, ioana]; // The list of customers

for(var i = 0; i < customers.length; i++){
  customer = customers[i];
  var bmi = Math.round(customer.weight / (customer.height * customer.height)); // BMI formula and the result will be rounded up or down.
  var result = " ";
  
  // BMI Conditions //
  
  if(bmi < 18.5) {
    result = "Underweight";
  } else if (bmi <= 25) {
    result = "Normal";
  } else if (bmi <= 30) {
    result = "Overweight";
  } else {
    result = "Obese";
  }
  
  console.log(customer.name + " | " + customer.gender + " | " + "BMI:" + " " + bmi + " | " + result)
}
