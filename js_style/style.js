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
}*/
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



function setup(){
  $("button").css("color", "black");
  $("#ifFall").hide();
  $("#ifBreadth").hide();
  $("#cratr").mouseleave(checkAt)

}

$(document).ready(setup);
