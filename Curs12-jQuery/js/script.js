// DOM Loaded //
$(onHtmlLoaded);

function onHtmlLoaded(){
  console.log("On HTML Loaded");
  
  // by id - jQuery element //
  console.log("Comment list", $("#comments-list"));
  // by id - native DOM element //
  console.log("Comment list", $("#comments-list")[0]);
  
  // by class //
  console.log("Item", $(".comment-item"));
  
  // by tag //
  console.log("Header", $("h1"));
  
  // by query selector //
  console.log("Author", $("section.comment-item strong"));
  
  // Modify content //
  var h1 = $("h1");
  h1.text("JQuery DOM Manipulation");
  h1.html("JQuery DOM Manipulation <em>New</em>");
  
  // Set attributes //
  var h2 = $("h2");
  h2.attr("title", "Comments List");         // set attribute
  console.log("H2 title", h2.attr("title")); // get attribute
  
  // Modify css properties//
  var commentsContainer = $("#comments-list");
  commentsContainer.css("border", "solid 1px green");
  commentsContainer.css({
    color: "blue",
    background: "#ccc"
  });
  console.log("Comments list border", commentsContainer.css("border"));
  
  // Add border to each comment //
  var commentItems = $(".comment-item")
  commentItems.first().css("border", "solid 5px pink");
  
  // Add new comment //
  var comment = "<section>" + 
                  "<h3>New comment</h3>" +
                  "<p>Content <strong>Author</strong></p>" +
                "</section>";
  commentsContainer.append(comment);
  
  // Add comments list
  var list = [
    {
      title: "Title 1",
      body: "Lorem ispum ...",
      author: "Ion Pop"
    },
    {
      title: "Title 2",
      body: "Lorem ispum ...",
      author: "Ana Pop"
    }
  ];
  
  for(var i = 0; i < list.length; i++) {
    var item = list[i];
    var comment = "<section>" + 
                  "<h3>" + item.title + "</h3>" +
                  "<p>" + item.body + "<strong>" + item.author + "</strong></p>" +
                "</section>";
    commentsContainer.append(comment);
  }
  
  // Remove element //
  commentItems.first().remove();
  
  // Bind events //
  var btnSearch = $("#btn-search");
  btnSearch.on("click", function(){
    // get search value
    var search = $("input[name='search']").val();
    console.log("Search value", search);
   
  });
  
  
  
}
