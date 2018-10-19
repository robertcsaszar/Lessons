function Games() {
  
}

Games.prototype.getAll = function() {
  return $.get("https://games-world.herokuapp.com/games")
}

Games.prototype.addNewGame = function() {
  var that = this
  return $.ajax({
      url: "https://games-world.herokuapp.com/games/",
      method: "POST",
      data: {
        title: "Call of Duty®: WWII Returned",
        releaseDate: 1333929600,
        genre: "First Person Shooter",
        publisher: "Activision",
        imageUrl: "http://oceanofgames.com/wp-content/uploads/2018/03/call_of_duty_wwii.jpg",
        description: "Call of Duty® returns to its roots with Call of Duty®: WWII—a breathtaking experience that redefines World War II for a new gaming generation. Land in Normandy on D-Day and battle across Europe through iconic locations in history’s most monumental war. Experience classic Call of Duty combat, the bonds of camaraderie, and the unforgiving nature of war."
      }
    })
    .then(function(respone) {
      that.title = respone.title;
      that.releaseDate = respone.releaseDate;
      that.genre = respone.genre;
      that.publisher = respone.publisher;
      that.imageUrl = respone.imageUrl;
      that.description = respone.description;
    });
}