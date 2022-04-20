var projectBox;
var researchBox;
var outputBox;
var creditsBox;

let projectPos;
let researchPos;
let outputPos;
let creditsPos;

let projectInitial;
let researchInitial;
let outputInitial;
let creditsInitial;

let projectFinal;
let researchFinal;
let outputFinal;
let creditsFinal;

let alternative;
let alternativePopup;
let mainstream;
let mainstreamPopup;
let comments;
let commentsPopup;

let scrollUp;
let backUp = false;
let navbar;

let speed = 5;
let fontsize;
let vw;
let vh;

let colors = ["6eb1f4", "d66b6b", "bcdcf7", "ffc5e5", "e8b6ff", "c3e264", "a698f4", "18ad71", "7fe2a9", "6989ff"];

function preload() {
  vw = windowWidth / 100;
  vh = windowHeight / 100;
  projectInitial = 80;
  researchInitial = 85;
  outputInitial = 90;
  creditsInitial = 95;
}

function setup() {
  noCanvas();
  howText = select("#how");
  howText.mouseOver(changeHowColor);
  howText.mouseOut(changeHowColor);
  scrollUp = select("#scrollUp");
  scrollUp.mousePressed(function() {
    backUp = true;
    // projectPos = projectInitial;
    // researchPos = researchInitial;
    // outputPos = outputInitial;
    // creditsPos = creditsInitial;
    scrollUp.style("opacity", "0");
    scrollUp.style("pointerEvents", "none");
  });
  navbar = select(".container");

  projectPos = projectInitial;
  researchPos = researchInitial;
  outputPos = outputInitial;
  creditsPos = creditsInitial;

  projectBox = select(".projectBox");
  researchBox = select(".researchBox");
  outputBox = select(".outputBox");
  creditsBox = select(".creditsBox");

  alternative = select("#alternative");
  alternativePopup = select("#alternativeImg");
  alternative.mouseOver(showAlternative);
  alternative.mouseOut(hideAlternative);

  mainstream = select("#mainstream");
  mainstreamPopup = select("#mainstreamImg");
  mainstream.mouseOver(showMainstream);
  mainstream.mouseOut(hideMainstream);

  comments = select("#comments");
  commentsPopup = select("#commentsImg");
  comments.mouseOver(showComments);
  comments.mouseOut(hideComments);
}

function changeHowColor() {
  howText.style("color","#"+random(colors))
}
//------------------------------------------------------------------------------------------------

function showAlternative() {
  alternativePopup.addClass("displayImg");
  alternativePopup.position(mouseX, mouseY);
}

function hideAlternative() {
  alternativePopup.removeClass("displayImg");
}

function showMainstream() {
  mainstreamPopup.addClass("displayImg");
  mainstreamPopup.position(mouseX, mouseY);
}

function hideMainstream() {
  mainstreamPopup.removeClass("displayImg");
}


function showComments() {
  commentsPopup.addClass("displayImg");
  commentsPopup.position(mouseX, mouseY);
}

function hideComments() {
  commentsPopup.removeClass("displayImg");
}


//------------------------------------------------------------------------------------------------

function draw() {
  vw = windowWidth / 100;
  vh = windowHeight / 100;


  var projectHeightPx = projectBox.style("height");
  var projectHeight = projectHeightPx.substring(0, projectHeightPx.length - 2);
  var researchHeightPx = researchBox.style("height");
  var researchHeight = researchHeightPx.substring(0, researchHeightPx.length - 2);
  var outputHeightPx = outputBox.style("height");
  var outputHeight = outputHeightPx.substring(0, outputHeightPx.length - 2);
  var creditsHeightPx = creditsBox.style("height");
  var creditsHeight = creditsHeightPx.substring(0, creditsHeightPx.length - 2);

  projectFinal = projectInitial - projectHeight * 100 / windowHeight - 15;
  researchFinal = researchInitial - researchHeight * 100 / windowHeight - 15;
  outputFinal = outputInitial - outputHeight * 100 / windowHeight - 15;
  creditsFinal = creditsInitial - creditsHeight * 100 / creditsHeight - 165;

  projectBox.style("top", projectPos + "vh");
  researchBox.style("top", researchPos + "vh");
  outputBox.style("top", outputPos + "vh");
  creditsBox.style("top", creditsPos + "vh");
  navbar.style("top", -projectInitial + projectPos + "vh")

  if (backUp) {
    if (projectPos >= projectFinal && projectPos <= projectInitial && researchPos == researchInitial) {
      if (projectPos + speed*5 > projectInitial) {
        projectPos = projectInitial;
        backUp = false;
      } else {
        projectPos += speed*5;
      }
    }

    if (researchPos >= researchFinal && researchPos <= researchInitial && outputPos == outputInitial) {
      if (researchPos + speed*5 > researchInitial) {
        researchPos = researchInitial;
      } else {
        researchPos += speed*5;
      }
    }

    if (outputPos >= outputFinal && outputPos <= outputInitial && creditsPos == creditsInitial) {
      if (outputPos + speed*5 > outputInitial) {
        outputPos = outputInitial;
      } else {
        outputPos += speed*5;
      }
    }
    if (creditsPos >= creditsFinal && creditsPos <= creditsInitial) {
      if (creditsPos + speed*5 > creditsInitial) {
        creditsPos = creditsInitial;
      } else {
        creditsPos += speed*5;
      }
    }
  }
  checkBoundaries();
}
//--------------------------------------------------------------------------comandi per tutti gli scroll
function mouseWheel() {
  if (event.deltaY > 0) {
    projectUp();
    researchUp();
    outputUp();
    creditsUp();

    if (outputPos < outputInitial) {
      let typeAnimation = select("#typeAnimation");
      typeAnimation.addClass("type");

    }

  }

  if (event.deltaY < 0) {
    projectDown();
    researchDown();
    outputDown();
    creditsDown();
  }
}

function checkBoundaries() {
  if (projectPos < projectFinal || projectPos > projectInitial) {
    projectPos = projectFinal;
  }
  if (researchPos < researchFinal || researchPos > researchInitial) {
    researchPos = researchFinal;
  }
  if (outputPos < outputFinal || outputPos > outputInitial) {
    outputPos = outputFinal;
  }
  if (creditsPos < creditsFinal || creditsPos > creditsInitial) {
    creditsPos = creditsFinal;
  }
}

//-------------------------------------------------------------------------------titolo + scroll

function projectUp() {
  if (projectPos >= projectFinal && projectPos <= projectInitial) {
    if (projectPos - speed < projectFinal) {
      projectPos = projectFinal;
    } else {
      scrollUp.style("opacity", "1");
      scrollUp.style("pointerEvents", "all");
      projectPos -= speed;
    }
  }
}

function projectDown() {
  if (projectPos >= projectFinal && projectPos <= projectInitial && researchPos == researchInitial) {
    if (projectPos + speed > projectInitial) {
      projectPos = projectInitial;
      scrollUp.style("opacity", "0");
      scrollUp.style("pointerEvents", "none");
    } else {
      projectPos += speed;
    }
  }
}

//-------------------------------------------------------------------------------titolo + scroll

function researchUp() {
  if (researchPos >= researchFinal && researchPos <= researchInitial && projectPos == projectFinal) {
    if (researchPos - speed < researchFinal) {
      researchPos = researchFinal;
    } else {
      researchPos -= speed;
    }
  }
}

function researchDown() {
  if (researchPos >= researchFinal && researchPos <= researchInitial && outputPos == outputInitial) {
    if (researchPos + speed > researchInitial) {
      researchPos = researchInitial;
    } else {
      researchPos += speed;
    }
  }
}

//-------------------------------------------------------------------------------titolo + scroll

function outputUp() {
  if (outputPos >= outputFinal && outputPos <= outputInitial && researchPos == researchFinal) {
    if (outputPos - speed < outputFinal) {
      outputPos = outputFinal;
    } else {
      outputPos -= speed;
    }
  }
}

function outputDown() {
  if (outputPos >= outputFinal && outputPos <= outputInitial && creditsPos == creditsInitial) {
    if (outputPos + speed > outputInitial) {
      outputPos = outputInitial;
    } else {
      outputPos += speed;
    }
  }
}

//-------------------------------------------------------------------------------titolo + scroll

function creditsUp() {
  if (creditsPos >= creditsFinal && creditsPos <= creditsInitial && outputPos == outputFinal) {
    if (creditsPos - speed < creditsFinal) {
      creditsPos = creditsFinal;
    } else {
      creditsPos -= speed;
    }
  }
}

function creditsDown() {
  if (creditsPos >= creditsFinal && creditsPos <= creditsInitial) {
    if (creditsPos + speed > creditsInitial) {
      creditsPos = creditsInitial;
    } else {
      creditsPos += speed;
    }
  }
}

//-------------------------------------------------------------------------------titolo + scroll
