function setup(){
  var clickTimes = 0;

  if ($("#diego").click(function(){
    $("#campus").val("UCSD");
    $("#diego").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#riverside").click(function(){
    $("#campus").val("UCR");
    $("#riverside").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#irvine").click(function(){
    $("#campus").val("UCI");
    $("#irvine").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#losangeles").click(function(){
    $("#campus").val("UCLA");
    $("#losangeles").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#barbara").click(function(){
    $("#campus").val("UCSB");
    $("#barbara").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#merced").click(function(){
    $("#campus").val("UCM");
    $("#merced").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#cruz").click(function(){
    $("#campus").val("UCSC");
    $("#cruz").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#davis").click(function(){
    $("#campus").val("UCD");
    $("#davis").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#berkeley").click(function(){
    $("#campus").val("UCB");
    $("#berkeley").addClass("middleclicked");
    ++clickTimes;
  }));

  }
}



$(document).ready(setup);
