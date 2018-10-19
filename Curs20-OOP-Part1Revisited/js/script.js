$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");
  
  function User(options){
    options = options || {};
    this.name = options.name;
    this.age = options.age;
    this.weight = options.weight;
    this.height = options.height;
  }
  
  User.prototype.calculateBMI = function(){
    return this.weight / (this.height * this.height);
  };
  
  var robert  = new User({
    name: "Robert",
    age: 26,
    weight: 75,
    height: 1.80
  });
  
  console.log("Robert's BMI: ", robert.calculateBMI());
  
  console.log("User's prototype property: ", User.prototype);
  console.log("Robert's prototype attribute: ", Object.getPrototypeOf(robert));
  console.log("They are the same! Prototype property is the same as prototype attribute");
  
  console.log(User.prototype.isPrototypeOf(robert));
}