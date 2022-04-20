jQuery(document).ready(function ($) {
  //COVER
  function inizio() {
    $(".titolo").css("transform", "translate(0, 0)");
    $("body").css("overflow-y", "auto");
    $(".capitolo").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".info").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".bottone-start").css({
      opacity: "100%",
      transform: "translate(0,30px)",
    });
    $("#containerone").hide();
  }

  setTimeout(inizio, 1000);

  $(".bottone-start").on("click", function partiamo() {
    $("#cover-scroll").fadeOut();
    $("#containerone").show();
    $("#viewportheight").fadeIn();
  });

  //MARCO
  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y >1700) {
      $("#goon").removeClass("flexioni");
      $("#goon").css("opacity", "1");
    } else {
      $("#goon").css("opacity", "0");
      $("#goon").addClass("flexioni");
    }
  });
  $("#goon").on("click", function spariscizioviatiprego() {
    // $("#campotot").css("opacity", "0");
    $("#campotot").delay(1000).css("opacity", "0%");
    $("#campotot").delay(1000).addClass("off");
    $("#goon").css("display", "none");
    // $("#campotot").delay(500).addClass("off");
    $("body").css("overflow-y", "hidden");
    $("#campotot2").delay(1000).removeClass("off");
    $("#campotot2").delay(1000).css("opacity", "1");
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
  $("#goback").on("click", function spariscizioviatiprego2() {
    // $("#campotot").css("opacity", "0");
    $("#campotot").removeClass("off");
    $("#campotot").delay(1000).css("opacity", "1");

    $("#goon").css("display", "flex");
    // $("#campotot").delay(500).addClass("off");
    $("body").css("overflow-y", "auto");
    $("#campotot2").delay(1000).css("opacity", "0%");
    $("#campotot2").delay(1000).addClass("off");
  });
  $("#boxinoisbacc").on("click", function () {
    if ($(".shown").hasClass("chiuso")) {
      $("#daytonakk1").css({ height: "2vh", width: "2vh" });
      $("#netflixshown").css("height", "0.875%");
      $("#primeshown").css("height", "19.125%");
      $(".shown").children().css("opacity", "1");
      $("#youtubeshown").css("height", "7.825%");
      $("#twitchshown").css("height", "3.475%");
      $(".shown").removeClass("chiuso");
    } else {
      $("#netflixshown,#primeshown, #youtubeshown, #twitchshown").css(
        "height",
        "0%"
      );
      $(".shown").addClass("chiuso");
      $(".shown").children().css("opacity", "0");
      $("#daytonakk1").css({ height: "0", width: "0" });
    }
  });
  $("#boxinoisbacc2").on("click", function () {
    if ($(".scroll").hasClass("chiuso")) {
      $("#netflixscroll").css("height", "52.175%");
      $("#daytonakk2").css({ height: "2vh", width: "2vh" });
      $("#primescroll").css("height", "33%");
      $(".scroll").children().css("opacity", "1");
      $("#youtubescroll").css("height", "17.3875%");
      $("#twitchscroll").css("height", "24.3375%");
      $(".scroll").removeClass("chiuso");
    } else {
      $("#netflixscroll,#primescroll, #youtubescroll, #twitchscroll").css(
        "height",
        "0%"
      );
      $(".scroll").addClass("chiuso");
      $(".scroll").children().css("opacity", "0");
      $("#daytonakk2").css({ height: "0", width: "0" });
    }
  });
  $("#boxinoisbacc3").on("click", function () {
    if ($(".click").hasClass("chiuso")) {
      $("#netflixclick").css("height", "46.95%");
      $("#daytonakk3").css({ height: "2vh", width: "2vh" });
      $("#primeclick").css("height", "27.825%");
      $("#youtubeclick").css("height", "12.1625%");
      $(".click").children().css("opacity", "1");
      $("#twitchclick").css("height", "6.95%");
      $(".click").removeClass("chiuso");
    } else {
      $("#netflixclick,#primeclick, #youtubeclick, #twitchclick").css(
        "height",
        "0%"
      );
      $(".click").addClass("chiuso");
      $(".click").children().css("opacity", "0");
      $("#daytonakk3").css({ height: "0", width: "0" });
    }
  });
});
function cl(text) {
  console.log(text);
}

window.addEventListener("scroll", () => {
  const span = document.querySelector("span");
  span.innerHTML = Math.round(window.scrollY * 7.6);

  var wScroll = window.scrollY;
});

let twitchcounter = document.getElementById("tspan");
let twitchscroll = document.getElementById("twitch");

let netflixcounter = document.getElementById("nspan");
let netflixscroll = document.getElementById("netflix");

let youtubecounter = document.getElementById("yspan");
let youtubescroll = document.getElementById("youtube");

let primecounter = document.getElementById("pspan");
let primescroll = document.getElementById("prime");

// function updateCounter() {
//   'use strict';
//   var height = document.documentElement.scrollHeight - window.innerHeight;
//    counters.textContent= document.documentElement.scrollTop / height * 150;
// }

// scrollHeight = pixel counter for an element
// scrollTop = quanto ho scrollato di quell'elemento
// heightno = how much scroll i have left

let twitchmap;
let netflixmap;
let youtubemap;
let primemap;

// function updateCounter() {
//   'use strict';
//   var heightno = twitchm.scrollHeight - window.innerHeight;
//    counters.textContent = document.documentElement.scrollTop / heightno * 150;
//   //  console.log(heightno);
//   //  console.log(window.innerHeight)
//   // console.log(window.innerHeight)
// }
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
function draw() {
  updateTwitchCounter();
  updateNetflixCounter();
  updateYouTubeCounter();
  updatePrimeCounter();
}
function updateTwitchCounter() {
  "use strict";
  twitchmap = map(
    document.documentElement.scrollTop,
    0,
    twitchscroll.scrollHeight,
    5,
    73
  );
  twitchcounter.textContent = round(twitchmap);
  if (round(twitchmap) > 73) {
    twitchcounter.textContent = 73;
  }
}

function updateNetflixCounter() {
  "use strict";
  netflixmap = map(
    document.documentElement.scrollTop,
    0,
    netflixscroll.scrollHeight,
    7,
    235
  );
  netflixcounter.textContent = round(netflixmap);
  if (round(netflixmap) > 235) {
    netflixcounter.textContent = 235;
  }
}

function updateYouTubeCounter() {
  "use strict";
  youtubemap = map(
    document.documentElement.scrollTop,
    0,
    youtubescroll.scrollHeight - windowHeight + windowHeight/5,
    12,
    828
  );
  youtubecounter.textContent = round(youtubemap);
  if (round(youtubemap) > 828) {
    youtubecounter.textContent = 828;
  }
}
function updatePrimeCounter() {
  "use strict";
  primemap = map(
    document.documentElement.scrollTop,
    0,
    primescroll.scrollHeight,
    11,
    433
  );
  primecounter.textContent = round(primemap);
  if (round(primemap) > 433) {
    primecounter.textContent = 433;
  }
}

document.addEventListener("scroll", updateTwitchCounter);
document.addEventListener("scroll", updateNetflixCounter);
document.addEventListener("scroll", updateYouTubeCounter);
document.addEventListener("scroll", updatePrimeCounter);
