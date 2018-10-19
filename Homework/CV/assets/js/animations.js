// Animation on Scroll //
$(function() {
  var $elements = $(".animateBlock.notAnimated"); //contains all elements of nonAnimated class
  var $window = $(window);
  $window.on("scroll", function(e) {
    $elements.each(function(i, elem) {
      //loop through each element
      if ($(this).hasClass("animated"))
        // check if already animated
        return;
      animateMe($(this));
    });
  });
});

function animateMe(elem) {
  var winTop = $(window).scrollTop(); // calculate distance from top of window
  var winBottom = winTop + $(window).height();
  var elemTop = $(elem).offset().top; // element distance from top of page
  var elemBottom = elemTop + $(elem).height();
  if (elemBottom <= winBottom && elemTop >= winTop) {
    // exchange classes if element visible
    $(elem)
      .removeClass("notAnimated")
      .addClass("animated");
  }
}

// Skill bar Animation //
$(document).ready(function() {
  $('.skills_wrapper > .skills-item').each(function() {
    $(this).find('.diagram > span').delay(2500).animate({
      width: $(this).data("level") + "%"
    }, 3000);
  });
});