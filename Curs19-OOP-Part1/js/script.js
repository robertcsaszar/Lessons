$(domLoaded)

function domLoaded() {
  console.log("Dom loaded")

  var emptyObject = {}; // no properties and no methods
  console.log(emptyObject);

  var emptyObject2 = new Object();
  console.log(emptyObject2);

  var userMe = {
    name: "Robert",
    age: 26,
    height: 180,
    weight: 75,
    eyesColor: "black",
    sayHi: function() {
      console.log("Hello ba, ce invarti?")
    },
    sayHiTo: function(name) {
      console.log("Hello, " + name + "!")
    }
  }
  console.log(userMe);
  userMe.sayHi();
  userMe.sayHiTo("Robert");
  console.log("My name is: ", userMe.name); // dot notation
  console.log(userMe["eyesColor"]); // brackets notation
  
  var prop = "height";
  console.log("Height: ", userMe[prop]); // will display the height
  console.log(userMe.prop); // userMe["prop"]
  
  prop = "age"
  console.log("Age: ", userMe[prop]); // will display the age

  console.log("userMe keys: ", Object.keys(userMe));
  console.log("userMe values: ", Object.values(userMe));
  
  var keys = Object.keys(userMe);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    console.log("Keys: ", key, userMe[key] )
  }
  
  // Constructor function
  
  function User(options) {
    options = options || {}; // this is used to avoid console errors
    this.name = options.name || ""; // if we're not sending a name, the object will get empty string as its name
    this.age = options.age;
    this.height = options.height;
    this.weight = options.weight;
    this.calculateBMI = function() {
      return this.height / this.weight;
    }
  }
  
  var user = new User({
    name: "Robert",
    age: 26,
    height: 180,
    weight: 75
  });

  console.log("My User created with constructor function: ", user);
  console.log("user BMI: ", user.calculateBMI());
  
  var colleague = new User({
    name: "Gusty",
    age: 120,
    height: 210,
    weight: 185
  });
  
  console.log("Colleague created with constructor function: ", colleague);
  console.log("Colleague BMI: ", colleague.calculateBMI());
  
  console.log("User prototype", User.prototype);
  
  User.prototype.sayHi = function() {
    console.log("Hello nab! " + this.name);
  }
  
  user.sayHi();
  colleague.sayHi();
  
  console.log("There is no prototype property on objects", user.prototype); // => undefined
  console.log("Prototype attribute", "User: ", Object.getPrototypeOf(user), "Colleague: ", Object.getPrototypeOf(colleague));
  console.log("Class is prototype of object", "User: " + User.prototype.isPrototypeOf(user), "Colleague: " + User.prototype.isPrototypeOf(colleague))
  
  console.log(user.toString())
  
}