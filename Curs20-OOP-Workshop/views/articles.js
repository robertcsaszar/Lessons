$(domLoaded);

function domLoaded() {
  console.log("Dom loaded");
  
  var containerEl = document.getElementById("articles-list");
  
  var articlesModel = new Articles();
  // articlesModel.getAll() returns 100 articles from the API
  // the articles are set as input to the success function in then
  // respone will take that value
  articlesModel.getAll().then(displayAllArticles); //displayAllArticles function with the respone from API
  
  function displayAllArticles(articlesData) {
    for(var i = 0; i < articlesData.length; i++) {
      var article = new Article(articlesData[i]);
      displayArticle(article)
    }
  }
  
  function displayArticle(article) {
    var liEl = document.createElement('li');
    
    var titleEl = document.createElement('h1');
    titleEl.innerHTML = article.title;
    
    titleEl.addEventListener("click", function() {
      window.location = "http://cursuri-robertdanielcsaszar97119.codeanyapp.com/Curs20-OOP-Workshop/templates/article.html?articleId=" + article.id;
    });
    
    var bodyEl = document.createElement('p');
    bodyEl.innerHTML = article.body;
    
    liEl.appendChild(titleEl);
    liEl.appendChild(bodyEl);
    
    containerEl.appendChild(liEl); 
  }
}