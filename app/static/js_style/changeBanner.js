function setup(){
  var clickTimes = 0;

  if ($("#diego").click(function(){
    $("#campus").val("ucsd");
    $("#diego").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#riverside").click(function(){
    $("#campus").val("ucr");
    $("#riverside").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#irvine").click(function(){
    $("#campus").val("uci");
    $("#irvine").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#losangeles").click(function(){
    $("#campus").val("ucla");
    $("#losangeles").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#barbara").click(function(){
    $("#campus").val("ucsb");
    $("#barbara").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#merced").click(function(){
    $("#campus").val("ucm");
    $("#merced").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#cruz").click(function(){
    $("#campus").val("ucsc");
    $("#cruz").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#davis").click(function(){
    $("#campus").val("ucd");
    $("#davis").addClass("middleclicked");
    ++clickTimes;
  }));
  if ($("#berkeley").click(function(){
    $("#campus").val("ucb");
    $("#berkeley").addClass("middleclicked");
    ++clickTimes;
  }));
}



$(document).ready(setup);
