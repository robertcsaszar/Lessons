function Article(options) {
  options = options || {};
  this.id = options.id;
  this.title = options.title;
  this.body = options.body;
  this.userId = options.userId;
}

Article.prototype.getArticleDetails = function() {
  // we're saing the value of the current context (=article model)
  // later on, in the AJAX success function we'll set attribute on it
  var that = this
  return $.get("https://jsonplaceholder.typicode.com/posts/" + this.id)
  .then(function(respone) {
    that.title = respone.title;
    that.body = respone.body;
    that.userId = respone.userId;
    console.log("This: ", this);
    console.log("That: ", that);
  });
}