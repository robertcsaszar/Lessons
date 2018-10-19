document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  // Get language from local storage //
  var culture = localStorage.getItem("culture");
  var radio = document.querySelector("[value=" + culture + "]");
  // if such a radio button exists
  if(radio) {
    // check/tick that radio button
    radio.setAttribute("checked", "checked");
  }
  
  // when clicking on a radio button
  // get all radio buttons with name attribute = language
  var radios = document.querySelectorAll('[name=language]');

  radios.forEach(function(radio) {
    // add click event listeners for each radio button
    radio.addEventListener('click', function() {
      // this function is executed when we click on a radio button
      // in a click handler, "this" is the element that was clicked on
      // console.log("ELEMENTUL CLICK ", this);
      // Get Value of radio
      console.log("ELEMENTUL CLICK ", this.value);
      // this.value is "ro" or "en"
      // set the "culture" in local storage with this.value
      localStorage.setItem("culture", this.value);
    });
  });

}