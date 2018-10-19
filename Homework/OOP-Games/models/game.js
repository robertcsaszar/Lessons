function Game(options) {
  options = options || {};
  this.id = options._id;
  this.title = options.title;
  this.imageUrl = options.imageUrl;
  this.description = options.description;
}

Game.prototype.getGameDetails = function() {
  var that = this
  return $.get("https://games-world.herokuapp.com/games/" + this.id)
    .then(function(respone) {
      that.title = respone.title;
      that.imageUrl = respone.imageUrl;
      that.description = respone.description;
    });
}

Game.prototype.editGame = function() {
  var that = this
  var title = $("#editInput").val();
  var description = $("#editDescription").val();
  return $.ajax({
      url: "https://games-world.herokuapp.com/games/" + this.id,
      method: "PUT",
      data: {
        title: title,
        description: description
      }
    })
    .then(function(respone) {
      that.title = respone.title;
      that.description = respone.description;
    });
}

Game.prototype.deleteGame = function() {
  var that = this
  return $.ajax({
      url: "https://games-world.herokuapp.com/games/" + this.id,
      method: "DELETE"
    })
    .then(function(respone) {
      that.title = respone.title;
      that.imageUrl = respone.imageUrl;
      that.description = respone.description;
    });
}