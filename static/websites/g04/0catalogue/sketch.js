const scrollContainer = document.querySelector("html");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

//-----------------------------------------------------------------------------------------------------------------------------------------------------
let freedomAll;
let rightAll;
let decentralizedAll;
let safeAll;
let dataAll;
let alternativeAll;
let openAll;
let advertisementAll;
let realAll;
let freeAll;
let uncategorizedAll;

let freedomSelected = true;
let rightSelected = true;
let decentralizedSelected = true;
let safeSelected = true;
let dataSelected = true;
let alternativeSelected = true;
let openSelected = true;
let advertisementSelected = true;
let realSelected = true;
let freeSelected = true;

var allWebsites;
var xPos = [];
var yPos = [];
var selected = [];
let spacing;
let isBooting = true;

let freedomBox;
let rightBox;
let decentralizedBox;
let safeBox;
let dataBox;
let alternativeBox;
let openBox;
let advertisementBox;
let realBox;
let freeBox;
let uncategorizedBox;

let noFound;
let infoIcon;
let infoContainer;
let infoBox;
let infoButton;

let favicons = [];
//-----------------------------------------------------------------------------------------------------------------------------------------------------
function preload() {
  noFound = select("#noFound");
  infoIcon = select("#infoIcon")
  infoContainer = select("#infoContainer");
  infoBox = select("#infoBox");
  infoButton = select("#infoButton");

  infoIcon.mousePressed(enlargeInfo);
  infoButton.mousePressed(reduceInfo);

  if (getItem("firstCatalogueLoad")==false) {
    infoBox.addClass("closedInfo");
    infoContainer.addClass("removeElements");
  }

  allWebsites = loadJSON("websites.json");
  for (let i=0; i<3; i++) {
    favicons[i]= loadImage("favicons/favicon"+i+".ico");
  }
}

function setup() {
  spacing = 20;
  sleep(1000).then(function() {isBooting=false});

  noCanvas();
  calculatePositionsX();
  calculatePositionsY();
  rearrangeSelection();

  infoBox.style("transition",".5s");
  infoContainer.style("transition",".5s");

  freedomBox = select('#freedom');
  rightBox = select('#right');
  decentralizedBox = select('#decentralized');
  safeBox = select('#safe');
  dataBox = select('#data');
  alternativeBox = select('#alternative');
  openBox = select('#open');
  advertisementBox = select('#advertisement');
  realBox = select('#real');
  freeBox = select('#free');
  uncategorizedBox = select('#uncategorized');

  freedomBox.mousePressed(switchFreedom);
  rightBox.mousePressed(switchRight);
  decentralizedBox.mousePressed(switchDecentralized);
  safeBox.mousePressed(switchSafe);
  dataBox.mousePressed(switchData);
  alternativeBox.mousePressed(switchAlternative);
  openBox.mousePressed(switchOpen);
  advertisementBox.mousePressed(switchAdvertisement);
  realBox.mousePressed(switchReal);
  freeBox.mousePressed(switchFree);
  uncategorizedBox.mousePressed(switchUncategorized);
}

function draw() {}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function reduceInfo() {
  infoBox.addClass("closedInfo");
  infoContainer.addClass("removeElements");
  if (getItem("firstCatalogueLoad")===null) {
    storeItem("firstCatalogueLoad", false);
  }
}

function enlargeInfo() {
  infoBox.removeClass("closedInfo");
  infoContainer.removeClass("removeElements");
}

function calculatePositionsX() {
  for (let i = 0; i < 87; i++) {
    let thisPosX = 10 + spacing * i;
    xPos[i] = thisPosX;
  }
}

function calculatePositionsY() {
  for (let i = 0; i < 87; i++) {
    if (i % 2 == 0) {
      let thisPosY = random(25, 35);
      yPos[i] = thisPosY;
    } else {
      let thisPosY = random(58, 63);
      yPos[i] = thisPosY;
    }
  }
}

function sleep(millisecondsDuration)
{
  return new Promise((resolve) => {
    setTimeout(resolve, millisecondsDuration);
  })
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFreedom() {
  freedomBox.toggleClass("freedom");
  let allThings = selectAll(".siteContainer");

  if (!selected.includes("freedom")) {
    selected[selected.length] = "freedom";
    freedomSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "freedom") {
        selected.splice(i, 1);
        freedomSelected = true;

        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }



}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchRight() {
  let allThings = selectAll(".siteContainer");
  rightBox.toggleClass("right");
  if (!selected.includes("right")) {
    selected[selected.length] = "right";
    rightSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "right") {
        selected.splice(i, 1);
        rightSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchDecentralized() {
  let allThings = selectAll(".siteContainer");
  decentralizedBox.toggleClass("decentralized");
  if (!selected.includes("decentralized")) {
    selected[selected.length] = "decentralized";
    decentralizedSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "decentralized") {
        selected.splice(i, 1);
        decentralizedSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchSafe() {
  let allThings = selectAll(".siteContainer");
  safeBox.toggleClass("safe");
  if (!selected.includes("safe")) {
    selected[selected.length] = "safe";
    safeSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "safe") {
        selected.splice(i, 1);
        safeSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchData() {
  let allThings = selectAll(".siteContainer");
  dataBox.toggleClass("data");
  if (!selected.includes("data")) {
    selected[selected.length] = "data";
    dataSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "data") {
        selected.splice(i, 1);
        dataSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAlternative() {
  let allThings = selectAll(".siteContainer");
  alternativeBox.toggleClass("alternative");
  if (!selected.includes("alternative")) {
    selected[selected.length] = "alternative";
    alternativeSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "alternative") {
        selected.splice(i, 1);
        alternativeSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchOpen() {
  let allThings = selectAll(".siteContainer");
  openBox.toggleClass("open");
  if (!selected.includes("open")) {
    selected[selected.length] = "open";
    openSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "open") {
        selected.splice(i, 1);
        openSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchAdvertisement() {
  let allThings = selectAll(".siteContainer");
  advertisementBox.toggleClass("advertisement");
  if (!selected.includes("advertisement")) {
    selected[selected.length] = "advertisement";
    advertisementSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "advertisement") {
        selected.splice(i, 1);
        advertisementSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchReal() {
  let allThings = selectAll(".siteContainer");
  realBox.toggleClass("real");
  if (!selected.includes("real")) {
    selected[selected.length] = "real";
    realSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "real") {
        selected.splice(i, 1);
        realSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchFree() {
  let allThings = selectAll(".siteContainer");
  freeBox.toggleClass("free");

  if (!selected.includes("free")) {
    selected[selected.length] = "free";
    freeSelected = false;
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "free") {
        selected.splice(i, 1);
        freeSelected = true;
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function switchUncategorized() {
  let allThings = selectAll(".siteContainer");
  uncategorizedBox.toggleClass("uncategorized");
  if (!selected.includes("uncategorized")) {
    selected[selected.length] = "uncategorized";
    for (let i=0; i<allThings.length; i++) {
      allThings[i].style("opacity", 0);
      allThings[i].style("transform", "translateX(100vw)");
    }
    sleep(600).then(rearrangeSelection);
  } else {
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] == "uncategorized") {
        selected.splice(i, 1);
        for (let i=0; i<allThings.length; i++) {
          allThings[i].style("opacity", 0);
          allThings[i].style("transform", "translateX(100vw)");
        }
        sleep(500).then(rearrangeSelection);
      }
    }
  }

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------

function toggleColors() {
  if (selected.length != 0) {
    freedomAll = selectAll('.freedom');
    rightAll = selectAll('.right');
    decentralizedAll = selectAll('.decentralized');
    safeAll = selectAll('.safe');
    dataAll = selectAll('.data');
    alternativeAll = selectAll('.alternative');
    openAll = selectAll('.open');
    advertisementAll = selectAll('.advertisement');
    realAll = selectAll('.real');
    freeAll = selectAll('.free');

    for (let i = 0; i < freedomAll.length; i++) {
      if (freedomSelected) {
        freedomAll[i].removeClass('freedom');
      } else {
        freedomAll[i].addClass('freedom');
      }
    }

    for (let i = 0; i < rightAll.length; i++) {
      if (rightSelected) {
        rightAll[i].removeClass('right');
      } else {
        rightAll[i].addClass('right');
      }
    }

    for (let i = 0; i < decentralizedAll.length; i++) {
      if (decentralizedSelected) {
        decentralizedAll[i].removeClass('decentralized');
      } else {
        decentralizedAll[i].addClass('decentralized');
      }
    }

    for (let i = 0; i < safeAll.length; i++) {
      if (safeSelected) {
        safeAll[i].removeClass('safe');
      } else {
        safeAll[i].addClass('safe');
      }
    }

    for (let i = 0; i < dataAll.length; i++) {
      if (dataSelected) {
        dataAll[i].removeClass('data');
      } else {
        dataAll[i].addClass('data');
      }
    }

    for (let i = 0; i < alternativeAll.length; i++) {
      if (alternativeSelected) {
        alternativeAll[i].removeClass('alternative');
      } else {
        alternativeAll[i].addClass('alternative');
      }
    }

    for (let i = 0; i < openAll.length; i++) {
      if (openSelected) {
        openAll[i].removeClass('open');
      } else {
        openAll[i].addClass('open');
      }
    }

    for (let i = 0; i < advertisementAll.length; i++) {
      if (advertisementSelected) {
        advertisementAll[i].removeClass('advertisement');
      } else {
        advertisementAll[i].addClass('advertisement');
      }
    }

    for (let i = 0; i < realAll.length; i++) {
      if (realSelected) {
        realAll[i].removeClass('real');
      } else {
        realAll[i].addClass('real');
      }
    }

    for (let i = 0; i < freeAll.length; i++) {
      if (freeSelected) {
        freeAll[i].removeClass('free');
      } else {
        freeAll[i].addClass('free');
      }
    }
  }
}
//-----------------------------------------------------------------------------------------------------------------------------------------------------

function rearrangeSelection() {
  let websitesCount=0;
  removeElements();
  let currentPosX;
  let indexX = 0;
  let currentPosY;
  let indexY = 0;
  for (let i = 0; i < 87; i++) {
    let thisCategories = [];

    if (allWebsites[i].Category1 != "") {
      thisCategories.push(allWebsites[i].Category1);
    }
    if (allWebsites[i].Category2 != "") {
      thisCategories.push(allWebsites[i].Category2);
    }
    if (allWebsites[i].Category3 != "") {
      thisCategories.push(allWebsites[i].Category3);
    }
    if (allWebsites[i].Category4 != "") {
      thisCategories.push(allWebsites[i].Category4);
    }
    if (allWebsites[i].Category5 != "") {
      thisCategories.push(allWebsites[i].Category5);
    }
    if (allWebsites[i].Category6 != "") {
      thisCategories.push(allWebsites[i].Category6);
    }
    if (selected.every(r => thisCategories.includes(r))) {
      websitesCount++;
      let keywordsLength = allWebsites[i].Keywords.length;
      currentPosY = yPos[indexY];
      indexY++;
      currentPosX = xPos[indexX];
      indexX++;
      //------------------------------------------------------------------------------------
      let siteContainer = createDiv();
      if (isBooting==false) {
        siteContainer.style("transform", "translateX(-100vw)");
        siteContainer.style("opacity", "0");
      }
      siteContainer.style("left", currentPosX + "vh");
      siteContainer.style("top", currentPosY - keywordsLength / 40 + "vh");
      siteContainer.addClass("siteContainer");
      if (isBooting==false) {
        siteContainer.style("transform", "translateX(0vw)");
        siteContainer.style("opacity", "1");
      }





      let siteName = createDiv(allWebsites[i].Platform);
      siteName.parent(siteContainer);
      siteName.addClass("siteName");

      //------------------------------------------------------------------------------------

      let siteKeywords = createDiv(allWebsites[i].Keywords);
      siteKeywords.parent(siteContainer);
      siteKeywords.addClass("siteKeywords");
      let keywordsHeightPx = siteKeywords.style("height");

      let keywordsHeightVh = int(keywordsHeightPx.substring(0,keywordsHeightPx.length-2))*100/windowHeight+6;
      //------------------------------------------------------------------------------------

      let overlayAll = createDiv();
      overlayAll.position(0, 0);
      overlayAll.addClass("dropdown");
      overlayAll.style("top", currentPosY - keywordsLength / 40 + "vh");
      overlayAll.style("left", currentPosX + "vh");


      let overlayInvisible = createDiv();
      overlayInvisible.parent(overlayAll);
      overlayInvisible.addClass("dropbtn");
      overlayInvisible.style("width", allWebsites[i].Platform.length * 2 + "vh");

      let overlayContainer = createDiv();
      overlayContainer.parent(overlayAll);
      overlayContainer.addClass("dropdown-content");
      overlayContainer.style("width",allWebsites[i].Payoff.length/25+"vh");
      overlayContainer.style("min-width","36vh");
      overlayContainer.style("max-width","70vh");
      if (currentPosY>50) {
        overlayContainer.style("top", "auto");
        overlayContainer.style("bottom", "0");
        overlayContainer.style("transform", "translateY(" + keywordsHeightVh + "vh)");

      }

      let overlaySite = createDiv(allWebsites[i].Platform);
      overlaySite.parent(overlayContainer);
      overlaySite.addClass("overlaySite");

      let linkString = createA(allWebsites[i].Link, "");
      linkString.parent(overlayContainer);
      linkString.addClass("linkButton");
      linkString.attribute("target", "_blank");

      let siteIco = createImg("favicons/favicon"+i+".ico", "?");
      siteIco.parent(linkString);
      siteIco.style("width","3.5vh");
      siteIco.style("position","absolute");
      siteIco.style("top","0");
      siteIco.style("right","0vh");

      let mouse = createImg("favicons/0mouse.png", "?");
      mouse.parent(linkString);
      mouse.style("height","2vh");
      mouse.style("position","absolute");
      mouse.style("top","1.4vh");
      mouse.style("right","3vh");

      let overlayText = createDiv(allWebsites[i].Payoff);
      overlayText.parent(overlayContainer);
      overlayText.addClass("overlayText");


    }
  }
  toggleColors();
  if (websitesCount==0){
    noFound.style("opacity","1");
  } else {noFound.style("opacity","0");}
}
