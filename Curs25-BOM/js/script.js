console.log("DOM", document);
console.log("DOM", window.document);

console.log("Console", console);
console.log("Console", window.console);

// OPEN NEW TAB FROM JS //

window.open("http://google.ro");
// CLOSE NEW TAB //
// window.close();

// EXECUTE CODE ATER 5 SECONDS //
setTimeout(function(){
  console.log("Execute after 5 seconds!")
}, 5000);