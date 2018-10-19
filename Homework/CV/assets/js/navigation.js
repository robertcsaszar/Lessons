// When the user scrolls down 20px from the top of the document, show the button
$(window).scroll(function() {
  scrollFunction()
});

function scrollFunction() {
  if ($("body").scrollTop() > 20 || $(document).scrollTop() > 20) {
    $("#myBtn").css("display", "block");
  } else {
    $("#myBtn").css("display", "none");
  }
}

// Nav Bar Smooth Scroll //

function homeFunction() {
  $('body, html').animate({
    scrollTop: $('#top-container ').offset().top
  }, 1000);
  $('#top-container').click(function(e) {
    e.preventDefault();
  });
}

function aboutFunction() {
  $('body, html').animate({
    scrollTop: $('#personal-container ').offset().top
  }, 1000);
  $('#personal-container').click(function(e) {
    e.preventDefault();
  });
}

function skillsFunction() {
  $('body, html').animate({
    scrollTop: $('#background2 ').offset().top
  }, 1000);
  $('#background2').click(function(e) {
    e.preventDefault();
  });
}

function careerFunction() {
  $('body, html').animate({
    scrollTop: $('#resume-container ').offset().top
  }, 1000);
  $('#resume-container').click(function(e) {
    e.preventDefault();
  });
}

function portfolioFunction() {
  $('body, html').animate({
    scrollTop: $('#portfolio-container ').offset().top
  }, 1000);
  $('#portfolio-container').click(function(e) {
    e.preventDefault();
  });
}

function contactFunction() {
  $('body, html').animate({
    scrollTop: $('#background4 ').offset().top
  }, 1000);
  $('#background4').click(function(e) {
    e.preventDefault();
  });
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  $('body, html').animate({
    scrollTop: $('#top-container ').offset().top
  }, 1000);
}

$(function() {
  $(document).scroll(function() {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});