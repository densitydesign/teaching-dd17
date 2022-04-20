let vw;
let vh;
let paroleDiv;
let introDiv;
let displayedWords;

let finalWords;
let finalTitle;
let finalTitleContainer;
let finalTitleQuote;

let itsTime = false;
let index = 0;
let button;
let scrollAvailable = false;
let hasSkippedGame = false;
let wordsAppeared = false;
let video;
let videoContainer;
let loadedVideo = false;
let deletedN=0;
let titleDisappeared = false;
let hoverStarted = false;
let startButton;

let speed = 5;

let colors = ["6eb1f4", "d66b6b", "bcdcf7", "ffc5e5", "e8b6ff", "c3e264", "a698f4", "18ad71", "7fe2a9", "6989ff"];
//var getNewRandomColor;

var words = ["authenticity", "free", "speech ", "no", "analytics", "privacy", "you do you", "your thinking", "no spying", "end-to-end encryption", "fair", "community owned", "love", "decentralization", "meaningful connection", "off", "not approved offensive behaviour", "privately organized", "open platform", "free flow of information", "(vs) censorship", "authentic human connection", "free thought", "the", "telegram", "app.net", "ownership and control of your data", "uncesored self expression", "secure messaging", "healthy user experience", "indipendent", "grid", "(vs) politically censorship", "authentic expression", "(vs) sell our information", "a place for you", "freedom of expression and association", "no premium costs", "open, free, and honest global conversation", "self-hosted", "share positive", "youtube", "(vs) feed that mines your attention", "blockchain technology", "connecting free and indepent community", "don't break any laws", "expression matters", "no stealing your data", "complexity", "(vs) cancel culture", "empowers you to protect your identity", "flourish express ideas freely", "interconnected", "more private than Facebook", "no cookies", "(vs) decentralized platform", "(vs) limited state/removed/self censored videos", "ethereum blockchain", "no tracking", "open", "personal data", "respectfull", "safe space", "twitter", "users accountable", "your friends for real", "own and control personal information", "express yourself openly", "decentralized network of indipendent operated servers", "(vs) censor our speech", "common webserver techonology", "for humans not algorithms", "instagram", "open conversation", "politically unbiased", "own your conversation", "(vs) survaillance", "can't delete/moderate/block/ban", "decentralized identity", "distributed", "not for sale", "(vs) addiction", "build real-world connection", "matrix", "right to privacy", "sense of belonging", "(vs) platform fees", "code of cunduction", "groupme", "have their voices heard", "no fear of being deplatformed", "take back your data", "you own your data", "self expression", "free to express", "gnu social", "freedom", "data stored forever on a distributed data source", "(vs) selling data", "creative freedom", "fairness", "true ownership of online identity", "whatsapp", "(vs) censor", "back in your hands", "(vs) digital survaillance", "decentralized", "individual liberty", "no stealing your data", "privately", "secure space", "safely", "(vs) violating privacy"];

function setup() {
  if (getItem("firstCatalogueLoad")==false) {
    storeItem("firstCatalogueLoad", null);
  }
  if (getItem("firstEcosystemLoad")==false) {
    storeItem("firstEcosystemLoad", null);
  }
  if (getItem("firstThemesLoad")==false) {
    storeItem("firstThemesLoad", null);
  }

  noCanvas();
  finalTitleContainer = select(".finalTitleContainer");
  finalTitle = select(".finalTitle");
  finalTitleQuote = select(".finalTitleQuote");

  video=select(".video");
  videoContainer = select("#videoContainer");

  var rColor = random(colors);
  button = select("#scrolldown");
  button.mousePressed(startFunction);
  button.style("background-color", "#" + rColor);

  startButton = select("#enter");

  paroleDiv = select("#keywordsContainer");
  paroleDiv.style("background-color", "#" + rColor);

  for (let i = 0; i < words.length; i++) {
    let elemento = createP(words[i]);
    elemento.parent(paroleDiv);
    elemento.addClass("elementino");


    if (words[i] != "off" && words[i] != "the" && words[i] != "grid") {
      elemento.mouseOver(deleteWord);
    } else {
      elemento.addClass("toKeep");
    }
  }
  displayedWords = selectAll(".elementino");
  finalWords = selectAll(".toKeep");


}

function draw() {
  if (itsTime && index < words.length - 1) {
    if (!displayedWords[index].hasClass("toKeep")) {
      displayedWords[index].style("opacity", "0");
    }
    index++;
  }

}
//----------------------------------------------------------------------------------------------
function deleteWord() {
  this.style("opacity", "0");
  deletedN++;
  if(deletedN>36&&!hoverStarted) {
    startFunction();
    hoverStarted=true;
  }
}

function startFunction() {

  if (!hasSkippedGame) {
    button.addClass("removeEvents");
    button.html("");
    itsTime = true;
    finalWords[0].style("transition", ".5s");
    finalWords[1].style("transition", ".5s");
    finalWords[2].style("transition", ".5s");
    hasSkippedGame = true;
    setTimeout(hideWords, 1400-deletedN*10);
  }


}

function hideWords() {
  finalWords[0].style("opacity", "0");
  finalWords[1].style("opacity", "0");
  finalWords[2].style("opacity", "0");
  setTimeout(reorderWords, 600);
}

function reorderWords() {
  finalTitleContainer.style("transition", ".5s");
  finalTitleContainer.style("opacity", 1);
  wordsAppeared = true;
  button.html("scroll to continue");
  setTimeout(function() {scrollAvailable = true;}, 600);
}

//-------------------------------------------------------------------------------------------------------

function mouseWheel() {
  if (scrollAvailable && event.deltaY > 0) {
    if(!titleDisappeared) {
      finalTitleContainer.style("opacity", 0);
      titleDisappeared = true;
    }
    showVideo();
  }
}

//----------------------------------------------------------------------------------------

function showVideo() {
  if(!loadedVideo) {
    video.addClass("videoAppear");
    if (hoverStarted) {

      video.showControls();
      videoContainer.removeClass("removeEvents");
    } else {
      video.play();
      video.showControls();
      videoContainer.removeClass("removeEvents");
    }
    button.html("skip>>");
    button.removeClass("removeEvents");
    button.mousePressed(showWebsite);
    video.onended(showWebsite);
  }
}

function showWebsite() {
  video.time(64);
  button.html("");
  button.addClass("removeEvents");
  startButton.style("opacity", "1");
  startButton.removeClass("removeEvents");
}
