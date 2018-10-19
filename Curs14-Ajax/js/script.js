// $(document).ready(
//   function() {
//     console.log("DOM IS READY")
//   }
// )

$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
   
  var getShowsData = function() {
    $.ajax({
      url: "http://api.tvmaze.com/search/shows?q=girls",
      method: "GET",
      success: manageData
    })
  }
  
  $("#invoke-ajax-test-code").on("click", function() {
    getShowsData()
  })
    
 function manageData(data, status, jqXHR) {
   $(".container").html(renderHtml(data))
 }
 
 function renderHtml(data) {
   var html = `<ul>`
                 for(var i = 0; i < data.length; i++) {
                   html += `<li>` + data[i].show.name + `</li>`
                 }
      html += `</ul>`
      return html;
 }
  
}