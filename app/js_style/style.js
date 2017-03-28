/*function courseAttriChosen(){
  var chosen = $("#cratr").val();
  if (chosen == 1){
    $("#ifBreadth").show();
    return;
  }
  else if (chosen == 2){
    $("#ifFall").show();
    return;
  }
  else{
    return;
  }
}
*/

/*function breadthSelected(){
  $('#cratr').click(function() {
    $("#breadCheck").toggle(this.selected);

function setup(){
  $("button").css("color", "black");

 breadthSelected();
}

window.onload(){
  $("#ifFall").hide();
  $("#ifBreadth").hide();
}
function checkAt(){
  var chosen = $("#cratr").val();
  if (chosen == 1){
    $("#ifFall").hide();
    $("#ifBreadth").show();
    return;
  }
  else if (chosen == 2){
    $("#ifBreadth").hide();
    $("#ifFall").show();
    return;
  }
  else{
    return;
  }

}


*/
function setup(){
  $("button").css("color", "black");
  $("#search").css("color", "white");
  $("#search").css("font-size", "24px");
  //$("#ifFall").hide();
  //$("#ifBreadth").hide();
  //$("#shortenHide").hide();
  //$("#cratr").mouseleave(checkAt)
  /*$("#shorten").click(function(){
    $("#shortenHide").show();
  });*/

}


function validateClass(){
  var validTerm = $("#semester option:selected").val();
  var validSub = $("#subjects option:selected").val();
  var validCareer = $("#career option:selected").val();
  var validCRN = document.forms.userData.courseNum.value;
  var validProceed = true;

  if (validTerm == "notValid" ){
    alert("You are missing Term");
    validProceed = false;
  }
  if (validSub == "notValid" ){
    alert("You are missing Subject");
    validProceed = false;
  }
  if (validCRN == "" ){
    alert("You are missing Course Number");
    validProceed = false;
  }
  if (validCareer == "notValid" ){
    alert("You are missing Career");
    validProceed = false;
  }

  if (validProceed == true){
    window.location.replace("notification.html");
  }
}

$(document).ready(setup);
