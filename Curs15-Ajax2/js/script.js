$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
  
  var getShowsData = function(dynamicValue) {
    $.ajax({
      url: "http://api.tvmaze.com/search/shows?q=" + dynamicValue,
      method: "GET",
      success: manageData
    })
  }
  
  $("#invoke-ajax-test-code").on("click", function() {
    var query = $("#search").val();
    getShowsData(query);
  })
    
 function manageData(data, status, jqXHR) {
   $(".container").html(renderHtml(data))
 }
 
 function renderHtml(data) {
   var html = `<ul>`
                 for(var i = 0; i < data.length; i++) {
                   var name = data[i].show.name;
                   var score = data[i].score;
                   var url = data[i].show.url;
                   html += `<li>` + name + " - " + score + " - " + `<a href="` + url + `" target="_blank">` + `Visit Site` + `</a>` + `</li>`
                 }
      html += `</ul>`
      return html;
 }
  
}