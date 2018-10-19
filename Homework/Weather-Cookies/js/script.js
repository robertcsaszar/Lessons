document.addEventListener("DOMContentLoaded", onHtmlLoaded);


// API Call //
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var apiKey = "731915d9ed3a406faa1873c623a52afd"

function searchCity() {
  var city = $("#searchCity").val();
  var cityContainer = $("#city");
  var temp = getCookies("temp");
  $.ajax({
    url: "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=" + apiKey,
    method: "GET",
    success: function(data) {
      cityContainer.html(city);
      console.log(data)
      document.cookie = "city=" + city + "; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/"
      if (temp == "c") {
        tempC();
      } else {
        tempF()
      }
    }
  });
}

// Temperature in Celsius //
function tempC() {
  var tempContainer = $("#temp");
  var cityContainer = $("#city");
  var getCity = getCookies("city");
  $.ajax({
    url: "https://api.weatherbit.io/v2.0/current?city=" + getCity + "&key=" + apiKey,
    success: function(temp) {
      cityContainer.html(getCity);
      for (var i = 0; i < temp.data.length; i++) {
        var temps = temp.data[i];
        tempContainer.html("<p>" + Math.floor(temps.temp) + "°</p>")
      }
    }
  });
}

// Temperature in Fahrenheit //
function tempF() {
  var tempContainer = $("#temp");
  var cityContainer = $("#city");
  var getCity = getCookies("city");
  $.ajax({
    url: "https://api.weatherbit.io/v2.0/current?city=" + getCity + "&key=" + apiKey,
    data: {
      units: "I"
    },
    success: function(temp) {
      cityContainer.html(getCity);
      for (var i = 0; i < temp.data.length; i++) {
        var temps = temp.data[i];
        tempContainer.html("<p>" + Math.floor(temps.temp) + "°F</p>")
      }
    }
  });
}

// Displays temperature according to user preferences //
function checkTemp() {
  var tempContainer = $("#temp");
  var cityContainer = $("#city");
  var getCity = getCookies("city");
  var temp = getCookies("temp");
  if (temp === "c") {
    $.ajax({
      url: "https://api.weatherbit.io/v2.0/current?city=" + getCity + "&key=" + apiKey,
      success: function(temp) {
        cityContainer.html(getCity);
        for (var i = 0; i < temp.data.length; i++) {
          var temps = temp.data[i];
          tempContainer.html("<p>" + Math.floor(temps.temp) + "°</p>")
        }
      }
    })
  } else {
    $.ajax({
      url: "https://api.weatherbit.io/v2.0/current?city=" + getCity + "&key=" + apiKey,
      data: {
        units: "I"
      },
      success: function(temp) {
        cityContainer.html(getCity);
        for (var y = 0; y < temp.data.length; y++) {
          var temps = temp.data[y];
          if (temps) {
            tempContainer.html("<p>" + Math.floor(temps.temp) + "°F</p>")
          }
        }
      }
    });
  }
}


function onHtmlLoaded() {

  // Store the buttons in variables //
  var btnC = $("#celsius");
  var btnF = $("#fahrenheit");
  var searchBtn = $("#searchBtn");
  var displayDate = $("#date");

  // Add Event Listener on each buttons //
  searchBtn.on("click", searchCity);
  btnC.on("click", tempC);
  btnF.on("click", tempF);

  // Get cookies with the name "temp" //
  // The radio will be checked according to the user preferences //
  var temp = getCookies("temp");
  var radio = document.querySelector("[value=" + temp + "]");

  if (radio) {
    radio.setAttribute("checked", "checked");
  }

  // Select all radios with [name=temp] //
  // For each radios, the clicked radio will be stored in cookies //
  // With the specific values, C = Celsius or F = Fahrenheit //
  var radios = document.querySelectorAll('[name=temp]');

  radios.forEach(function(radio) {
    radio.addEventListener('click', function() {
      document.cookie = "temp=" + this.value + "; expires=Thu, 18 Dec 2019 12:00:00 UTC; path=/"
    });
  });

  checkTemp();

  // Current Date and Time //

  var myDate = new Date();

  let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


  let date = myDate.getDate();
  let month = monthsList[myDate.getMonth()];
  let year = myDate.getFullYear();
  let day = daysList[myDate.getDay()];

  let today = `${date} ${month} ${year}, ${day}`;

  let amOrPm;
  let twelveHours = function() {
    if (myDate.getHours() > 12) {
      amOrPm = 'PM';
      let twentyFourHourTime = myDate.getHours();
      let conversion = twentyFourHourTime - 12;
      return `${conversion}`

    } else {
      amOrPm = 'AM';
      return `${myDate.getHours()}`
    }
  };
  let hours = twelveHours();
  let minutes = myDate.getMinutes();

  let currentTime = `${hours}:${minutes} ${amOrPm}`;

  displayDate.html(today + ' ' + currentTime);
}


// COOKIES //
console.log("Get Cookies:", document.cookie);

function getCookies(key) {
  var cookies = document.cookie.split("; ");
  var response;
  cookies.forEach(function(value) {
    var cookie = value.split("=");
    if (cookie[0] === key) {
      response = cookie[1]
    }
  });
  return response;
}