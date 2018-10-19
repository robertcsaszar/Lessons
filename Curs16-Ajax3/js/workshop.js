$(domLoaded)

function domLoaded(){
  console.log("Dom loaded") 
  
  var apiUrl = "https://jsonplaceholder.typicode.com/posts/";
  var btn = $("#deletePost");
  
  getPosts();
  
  btn.on("click", deletePost)
  
  function deletePost() {
    var id = $("[name=delete]").val();
    $.ajax({
      url: apiUrl + id,
      method: "DELETE",
      success: function(){
        alert("Post with id " + id + " deleted")
      }
    })
  }
  
  function getPosts() {
    var listContainer = $("#listPosts")
    $.ajax({
       url: apiUrl,
       success: function(respone) {
//          console.log("Success", respone);
         for(var i = 0; i < respone.length; i++){
//            console.log("Title", respone[i].title);
           var title = "<h3>" + respone[i].title + "</h3>";
           listContainer.append(title);
         }
       }
     });
  }
  
}