$(domLoaded)

function domLoaded(){
  console.log("Dom loaded")
  
  var btn = $("#button");
  var postUrl = "https://jsonplaceholder.typicode.com/posts"
  var commentsUrl = "https://jsonplaceholder.typicode.com/comments"
  btn.on("click", getPostsAndComments)
  
  
  
  function getPostsAndComments() {
    $.ajax({
      url: postUrl,
      method: "GET"
    })
    .then(function(posts) {
      var html = "<ul>"
      for(var i = 0; i < 10; i++) {
        var postId = posts[i].id
        html += "<li>";
        html += "<div>" + posts[i].title + "</div>";
        html += '<ol id="post_id_' + postId + '"></ol>'
        getCommentsPost(postId);
      }
      html += "</ul>"
      $(".content").html(html);
    })
  }
  
  function getCommentsPost (postId) {
    var computedPostId = postId;
    if (postId === 4) {
      computedPostId = "///dsds/"
    }
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts/" + postId + "/comments",
      method: "GET"
    })
    .then(function(comments){
      var commentsLists = ""
      var maxComments = comments.length > 10 ? 10 : comments.length;
      for(var i = 0; i < maxComments; i++){
        commentsLists += "<li>" + comments[i].name + "</li>"
      }
      $("#post_id_" + postId).html(commentsLists)
    })
    .catch(function(error){
      $("#post_id_" + postId).html("<li style='color:red;'>Cannont get comments for post id" + postId + "</li>")
    })
  }
 
}

