$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");

  var containerEl = document.getElementById("articles-details");

  var article = new Article();
  var articleId = getUrlParameter("articleId");
  // our article object gets the id form URL
  article.id = articleId;

  article.getArticleDetails().then(function() {
    displayArticleDetails(article);
  });

  function displayArticleDetails(articleDetails) {
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = articleDetails.title;
    containerEl.appendChild(titleEl);

    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = articleDetails.body;
    containerEl.appendChild(bodyEl);
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  }
}