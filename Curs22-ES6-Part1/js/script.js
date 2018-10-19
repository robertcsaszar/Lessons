function test() {
  for(var i = 1; i < 10; i++) {
    var str = 'Something ' + i;
    console.log(str);
  }
}

var myFunction = function() {
  console.log("My function!")
}

const mynumber = 2;
// mynumber = 7; // error: assignment to constant variable

const user ={
  name: "John",
  age: 35
};

// user = {
//   name: "Mary",
//   age: 35
// }; // error: assignment to constant variable

user.name = "Mary";
console.log("user", user);