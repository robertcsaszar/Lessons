function Articles() {
  
}

Articles.prototype.getAll = function() {
  return $.get("https://jsonplaceholder.typicode.com/posts")
}