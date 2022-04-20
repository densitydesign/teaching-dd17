// $(".culo").load(function () {
//   $("#loadingclass2").hide();
// });

jQuery(document).ready(function ($) {
  //-----------------------------------------------------------------
  $(document).ready(function () {
    $("#freccia").delay(8000).fadeIn(500);
  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
      // $("#navbar").fadeIn();
      // $("#container").css("background-color", "black");
      // $(".text").css("color", "white");
      $("#navbar").css("opacity", "100%");
    } else {
      // $("#navbar").fadeOut();
      // $("#container").css("background-color", "transparent");
      // $(".text").css("color", "black");
      $("#navbar").css("opacity", "0%");
    }
  });

  //-----------------------------------------------------------------

  function spostati() {
    $("#t1").css("transform", "translate(-70px, -30px)");
    $("#t2").css("transform", "translate(-50px, -60px)");
    $("#t3").css("transform", "translate(-5px, -150px)");
    $("#t4").css("transform", "translate(10px, -120px)");
    $("#t5").css("transform", "translate(50px, -30px)");
    $("#t6").css("transform", "translate(-150px, -20px)");
    $("#t7").css("transform", "translate(-70px, -50px)");
    $("#t8").css("transform", "translate(-30px, -150px)");
    $("#t9").css("transform", "translate(50px, -120px)");
    $("#t10").css("transform", "translate(150px, -30px)");
    $("#t11").css("transform", "translate(-200px, -10px)");
    $("#t12").css("transform", "translate(-120px, 120px)");
    $("#t13").css("transform", "translate(10px, -150px)");
    $("#t14").css("transform", "translate(100px, -120px)");
    $("#t15").css("transform", "translate(180px, 0px)");
    $("#t16").css("transform", "translate(-150px, 30px)");
    $("#t17").css("transform", "translate(-70px, 120px)");
    $("#t18").css("transform", "translate(-20px, 70px)");
    $("#t19").css("transform", "translate(50px, 30px)");
    $("#t20").css("transform", "translate(150px, 30px)");
    $("#t21").css("transform", "translate(-70px, 50px)");
    $("#t22").css("transform", "translate(-20px, 120px)");
    $("#t23").css("transform", "translate(0px, 80px)");
    $("#t24").css("transform", "translate(30px, 50px)");
    $("#t25").css("transform", "translate(50px, 30px)");
  }

  function rimettiti() {
    $("#t1").css("transform", "translate(0px, 0px)");
    $("#t2").css("transform", "translate(0px, 0px)");
    $("#t3").css("transform", "translate(0px, 0px)");
    $("#t4").css("transform", "translate(0px, 0px)");
    $("#t5").css("transform", "translate(0px, 0px)");
    $("#t6").css("transform", "translate(0px, 0px)");
    $("#t7").css("transform", "translate(0px, 0px)");
    $("#t8").css("transform", "translate(0px, 0px)");
    $("#t9").css("transform", "translate(0px, 0px)");
    $("#t10").css("transform", "translate(0px, 0px)");
    $("#t11").css("transform", "translate(0px, 0px)");
    $("#t12").css("transform", "translate(0px, 0px)");
    $("#t13").css("transform", "translate(0px, 0px)");
    $("#t14").css("transform", "translate(0px, 0px)");
    $("#t15").css("transform", "translate(0px, 0px)");
    $("#t16").css("transform", "translate(0px, 0px)");
    $("#t17").css("transform", "translate(0px, 0px)");
    $("#t18").css("transform", "translate(0px, 0px)");
    $("#t19").css("transform", "translate(0px, 0px)");
    $("#t20").css("transform", "translate(0px, 0px)");
    $("#t21").css("transform", "translate(0px, 0px)");
    $("#t22").css("transform", "translate(0px, 0px)");
    $("#t23").css("transform", "translate(0px, 0px)");
    $("#t24").css("transform", "translate(0px, 0px)");
    $("#t25").css("transform", "translate(0px, 0px)");
  }

  $("#thumbnail-group").mouseenter(function () {
    spostati();
  });
  $("#thumbnail-group").mouseleave(function () {
    rimettiti();
  });
});