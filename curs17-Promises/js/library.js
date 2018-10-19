var getName = function(callback) {
    var firstName = prompt("First Name")
    var lastName = prompt("Last Name")
    var fullName
    
    setTimeout(function() {
      fullName = firstName + " " + lastName
      if (typeof callback === "function") {
        callback(fullName)
      }
      
    }, 2000)
  
    return fullName
  }