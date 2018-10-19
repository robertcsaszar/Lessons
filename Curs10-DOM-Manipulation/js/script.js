// Get element by id //
console.log("Comments list", document.getElementById("comments-list"));

// when window obj is available //
window.addEventListener("load", function(event) {
  console.log("All resources finished loading!");
});

// when document obj is available //
document.addEventListener("DOMContentLoaded", onHtmlLoaded);

function onHtmlLoaded() {
  console.log("DOM fully loaded and parsed");
  
  // by id
  console.log("Comments list", document.getElementById("comments-list"));
  // by class
  console.log("Comments items", document.getElementsByClassName("comment-item"));
  // first by class
  console.log("First comment", document.getElementsByClassName("comment-item")[0]);
  // by tag name
  console.log("Comments items", document.getElementsByTagName("section"));
  // second by tag
  console.log("Second comment", document.getElementsByTagName("section")[1]);
  // by class & tag
  console.log("First comment", document.querySelector("section.comment-item"));
  // all by class & tag
  console.log("First comment", document.querySelectorAll("section.comment-item"));  
  // all users
  console.log("First comment", document.querySelectorAll("section.comment-item strong"));
  
  // Change h1 content
  var h1 = document.querySelector("h1");
  h1.innerText = "JS DOM Manipulation NEW";  // as string
  console.log("H1 text", h1.innerText);
  h1.innerHTML = "JS DOM Manipulation <em>NEW</em>" // as html
  console.log("H1 html", h1.innerHTML);
  
  // Manipulate attribute
  var h2 = document.querySelector("h2");
  h2.setAttribute("title", "Comments list"); // set attribute
  console.log("Get attribute", h2.getAttribute("title")); // get attribute
  h2.id = "comment-list-id"; // set id attribute
  console.log("Comments list id", h2.id); // get id attribute
  
  // Change style
  var commentsContainer = document.getElementById("comments-list");
  commentsContainer.style.border = "solid 1px green";
  
  var commentsItems = document.getElementsByClassName("comment-item");
  for (var i = 0; i < commentsItems.length; i++){
    commentsItems[i].style.border = "solid 2px red";
  }
  
  // Add new DOM Elements
  var commentsItem = document.createElement("section");
  commentsItem.className = "comment-item";
  commentsItem.innerHTML = "<h3>New comment</h3>" +
                            "<p>New comment content<strong>author</strong></p>";
  
  commentsContainer.appendChild(commentsItem);
  
  // Remove 1st comment item
  var commentItem = document.querySelector("section.comment-item");
  commentsContainer.removeChild(commentItem)
  
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
  
  for (var j = 0; j < list.length; j++) {
    var comment = list[j];
    var item = document.createElement("section");
    item.className = "comment-item";
    item.innerHTML = "<h3>" + comment.title + "</h3>" +
                      "<p>" + comment.body + "<strong>" + comment.author + "</strong></p>";
    commentsContainer.appendChild(item);
  }
  
  var btnSearch = document.getElementById("btn-search");
  
  // bind the click event on button
  btnSearch.addEventListener("click", onSearch);
  //   btnSearch.addEventListener("click", onSearch1);
  //   btnSearch.addEventListener("click", onSearch2);
  //   btnSearch.addEventListener("mouseover", onHover);
  
  function onSearch() {
    alert(1);
  }
  
  // unbind from click event
  //   btnSearch.removeEventListener("click", onSearch);
  
}


