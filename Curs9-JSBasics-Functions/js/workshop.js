var person1 = {
  name: "Robert",
  gender: "M",
  height: 1.78,
  weight: 73
};

var person2 = {
  name: "Vasile",
  gender: "M",
  height: 1.85,
  weight: 95
};
// List of persons
var persons = [person1, person2];
console.log("Persons", persons);

for(var i = 0; i < persons.length; i++) {
  var person = persons[i];
//   console.log("Person = ", person);
//   console.log("Height = ", person.height);
  var bmi = person.weight / (person.height * person.height);
  var result = " ";
  
  if(bmi < 18.5) {
    result = "underweight";
  } else if (bmi < 25) {
    result = "normal";
  } else if (bmi < 30) {
    result = "overweight";
  } else {
    result = "obese";
  }
  console.log(person.name + " | " + person.gender + " | " + bmi + " | " + result);
}