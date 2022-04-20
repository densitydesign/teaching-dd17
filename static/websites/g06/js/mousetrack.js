var progresso = 2;
jQuery(document).ready(function ($) {
  //COVER
  function inizio() {
    $(".titolo").css("transform", "translate(0, 0)");
    $(".capitolo").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".info").css({ opacity: "100%", transform: "translate(0,-7px)" });
    $(".bottone-start").css({
      opacity: "100%",
      transform: "translate(0,30px)",
    });
  }

  setTimeout(inizio, 1000);

  $(".bottone-start").on("click", function partiamo() {
    $("#cover-mousetrack").fadeOut();
  });

  //MARCO
  var nome = "bottone";
  var count = 3;
  var startTime, endTime;
  var x = setInterval(function () {
    handleTimer(count);
  }, 800);
  function start() {
    startTime = new Date();
  }
  function end() {
    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000; //in ms
    // strip the ms
    // get seconds
    var seconds = Math.round(timeDiff * 100) / 100;
    document.getElementById("testo2").innerHTML =
      "<span>YOU'VE DONE IT!<br>you took " +
      seconds +
      " seconds<br>and you did 9 interactions<br>to deactivate Netflix<br>autoplay function</span>";
  }
  function handleTimer() {
    if (count === 0) {
      clearInterval(x);
    } else {
      $("#countdown").html(count);
      count--;
    }
  }
  $(".bottone", this).on("click", function entracarta6() {
    $(this).hide(0);
    $("#" + nome + progresso).show();
    testo();
    progresso++;
  });
  $("#goon").on("click", function cambio() {
    $("#campo").delay(1000).css("opacity", "0%");
    $("#campo").delay(1000).addClass("off");
    $("#campo2").delay(1000).removeClass("off");
    $("#campo2").delay(1000).css("opacity", "1");
    $("#goon").css("display", "none");
  });
  $("#goback").on("click", function spariscizioviatiprego2() {
    // $("#campotot").css("opacity", "0");
    $("#campo").removeClass("off");
    $("#campo").delay(1000).css("opacity", "1");

    $("#goon").css("display", "flex");
    // $("#campotot").delay(500).addClass("off");
    $("#campo2").delay(1000).css("opacity", "0%");
    $("#campo2").delay(1000).addClass("off");
  });
  //mousetrack comparison-------------------------------------------------

  $(".visbottone", this).on("click", function attiva() {
    if ($(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css({
          "background-color": "transparent",
          height: "4vh",
        });
        $("#netflixstats,#netflixnum").css("display", "none");
        $("#titolettonetflix").css({ color: "white", "margin-top": "0%" });
        $("#netflixpath").removeClass("active");
        $("#netflixbutton").removeClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css({
          "background-color": "transparent",
          height: "4vh",
        });
        $("#primestats,#primenum").css("display", "none");
        $("#primepath").removeClass("active");
        $("#titolettoprime").css({ color: "white", "margin-top": "0%" });
        $("#primebutton").removeClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css({
          "background-color": "transparent",
          height: "4vh",
        });
        $("#twitchstats").css("display", "none");
        $("#twitchpath").removeClass("active");
        $("#titolettotwitch").css({ color: "white", "margin-top": "0%" });
        $("#twitchbutton").removeClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css({
          "background-color": "transparent",
          height: "4vh",
        });
        $("#youtubestats,#youtubenum").css("display", "none");
        $("#titolettoyoutube").css({ color: "white", "margin-top": "0%" });
        $("#youtubepath").removeClass("active");
        $("#youtubebutton").removeClass("active");
      }
    } else if (!$(this).hasClass("active")) {
      if ($(this).attr("id") == "netflixbutton") {
        $("#netflixbutton").css("height", "12vh");
        $("#netflixstats,#netflixnum").css("display", "flex");
        $("#titolettonetflix").css({ color: "red" });
        $("#netflixbutton").addClass("active");
        $("#netflixpath").addClass("active");
      } else if ($(this).attr("id") == "primebutton") {
        $("#primebutton").css("height", "12vh");
        $("#primestats,#primenum").css("display", "flex");
        $("#titolettoprime").css({ color: "rgb(26, 117, 255)" });
        $("#primebutton").addClass("active");
        $("#primepath").addClass("active");
      } else if ($(this).attr("id") == "twitchbutton") {
        $("#twitchbutton").css("height", "10vh");
        $("#twitchstats").css("display", "flex");
        $("#titolettotwitch").css({ color: "fuchsia" });
        $("#twitchpath").addClass("active");
        $("#twitchbutton").addClass("active");
      } else if ($(this).attr("id") == "youtubebutton") {
        $("#youtubebutton").css("height", "12vh");
        $("#youtubestats,#youtubenum").css("display", "flex");
        $("#titolettoyoutube").css({
          color: "rgb(0,255,0)",
        });
        $("#youtubepath").addClass("active");
        $("#youtubebutton").addClass("active");
      }
    }
  });

  //percorso guidato----------------------------------------------

  function testo() {
    if (progresso == 2) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br><span>Click on the downwards arrow next to the profile picture.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 2.jpg"
      );
      start();
    } else if (progresso == 3) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<span><br><br>In the dropdown menu, click on the Account button.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 3.jpg"
      );
    } else if (progresso == 4) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<span><br><br>Click on the scrollbar.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 4.jpg"
      );
    } else if (progresso == 5) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<span><br><br>Click on the downwards arrow of Bharath's profile.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 5.jpg"
      );
    } else if (progresso == 6) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<br><br>Click on the downwards arrow of Bharath's profile.<span><br><br>Next to Playback Settings, click on Change.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 6.jpg"
      );
    } else if (progresso == 7) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<br><br>Click on the downwards arrow of Bharath's profile.<br><br>Next to Playback Settings, click on Change.<span><br><br>Uncheck Autoplay next episode in a series.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 7.jpg"
      );
    } else if (progresso == 8) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<br><br>Click on the downwards arrow of Bharath's profile.<br><br>Next to Playback Settings, click on Change.<br><br>Uncheck Autoplay next episode in a series.<span><br><br>Uncheck Autoplay previews while browsing.</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 8.jpg"
      );
    } else if (progresso == 9) {
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<br><br>Click on the downwards arrow of Bharath's profile.<br><br>Next to Playback Settings, click on Change.<br><br>Uncheck Autoplay next episode in a series.<br><br>Uncheck Autoplay previews while browsing.<span><br><br>Click on the Save button</span>";
      $("#screenshots").attr(
        "src",
        "./assets/Netflix/Netflix screenshot 9.jpg"
      );
    } else if (progresso == 10) {
      end();
      document.getElementById("testo1").innerHTML =
        "Click on the back button in the player window.<br><br>Click on the downwards arrow next to the profile picture.<br><br>In the dropdown menu, click on the Account button.<br><br>Click on the scrollbar.<br><br>Click on the downwards arrow of Bharath's profile.<br><br>Next to Playback Settings, click on Change.<br><br>Uncheck Autoplay next episode in a series.<br><br>Uncheck Autoplay previews while browsing.<br><br>Click on the Save button";
      $("#screenshots").css("opacity", "0");
      $("#testo2").css("left", "0%");
      $("#goon").css("right", "2%");
      $("#campo").css("cursor", "auto");
      p1.noLoop();
    }
  }
});

let freccia;
let s1 = function (p) {
  p.setup = function () {
    freccia = p.loadImage("cursor.svg");
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.background(0);
  };
};
let p1 = new p5(s1, "screenshotscont");

p1.draw = function () {
  if (progresso >= 3) {
    disegnafreccia();
  }
  // windowResized2();
};
function disegnafreccia() {
  p1.imageMode(p1.CENTER);
  p1.image(freccia, p1.mouseX, p1.mouseY, 10, 16);
}
var options = {
  animate: true,
  patternWidth: 500,
  patternHeight: 500,
  grainOpacity: 0.15,
  grainDensity: 1,
  grainWidth: 1,
  grainHeight: 1,
};
grained("#grain-totale", options);
