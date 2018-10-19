var personString = '{"name": "Vlad", "age": 25, "gender": "M"}'
var doubleQuotexExample = " \"name\": \"Vlad\", \"age\": 25, \"gender\": \"M\" "

var person = {
  name: "Ionut",
  age: 25,
  gender: "M"
}
var age = 25;

console.log("Nume", person.name);
person.age = person.age + 1;
console.log("Person Age", person.age);

console.log("Type of personString", typeof personString);
console.log("Type of person", typeof person);
console.log("Type of age", typeof age);

// Deserializare
var convertedPersonStringToObject = JSON.parse(personString);
// Serializare
var convertedPersonString = JSON.stringify(person);

console.log("convertedPersonStringToObject", convertedPersonStringToObject);
console.log("convertedPersonString", convertedPersonString);

// console.log("Nume", personString.name); //