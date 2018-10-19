var project = function() {
  var portfolio = $("#portfolio-item");

  for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    // Create a card for each project //
    var projectDiv = $("<div></div>").addClass("col-md-6 mt-2 mb-2");
    var projectCard = $("<div></div>").addClass("card bg-light text-dark");
    var projectCardBlk = $("<div></div>").addClass("card-header");

    // Create a div for title //
    var titleDiv = $("<div></div>").addClass("text-center");

    // Create the title with the results from the api between h4 tags //
    var title = $("<h4>" + project.title + "</h4>").addClass("text-center");

    // Create a new row for images and description //
    var rowDesc = $("<div></div>").addClass("row card-body");

    // Create a div for images with class col (collumn) //
    var colDivImg = $("<div></div>").addClass("col-md-6 border-right");

    // Create a div for description with class col (collumn)
    var colDivDesc = $("<div></div>").addClass("col-md-6");

    // Create the title with Description text between h4 tags //
    var description = $("<h4>Description</h4>").addClass("text-center");

    // Create the image and the description //
    var img = $(`<img src="` + project.img + `">`).addClass("card-img-top img-fluid");
    var desc = $("<p>" + project.description + "</p>")

    // Create the footer //
    var cardFooter = $("<footer></footer>").addClass("card-footer");

    // Create the button //
    var button = $("<a href='" + project.link + "' role='button' target='_blank'>Link</a>").addClass("btn btn-primary btn-block");

    portfolio.append(projectDiv);

    // Add a card for each project //
    projectDiv.append(projectCard);
    projectCard.append(projectCardBlk);

    // Add div for title //
    projectCardBlk.append(titleDiv);

    // Add the title between h4 tags //
    titleDiv.append(title);

    // Add a new row for image and desc //
    projectCard.append(rowDesc);

    // Add div with collumn class for image //
    rowDesc.append(colDivImg);

    // Add the image //
    colDivImg.append(img);

    // Create another div with collumn class for desc //
    rowDesc.append(colDivDesc);

    // Add description for each project //
    colDivDesc.append(description);

    // Add the description for each project //
    colDivDesc.append(desc);

    // Add footer for each project //
    projectCard.append(cardFooter);

    // Add button with "Link" text for each project //
    cardFooter.append(button);

  }

}