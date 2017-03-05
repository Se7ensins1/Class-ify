function courseAttriChosen(){
  var chosen = $("#cratr").val();
  if (chosen == "Breadth Requirements"){
    $("#ifBreadth").hide();
  }
  else if (chosen == "Fall Program for Freshman"){
    $("#ifFall").hide();
  }
  else{
    return;
  }
}


function setup(){

  courseAttriChosen();
}

window.onload = function(){
    $("button").css("color", "black");
  $("#ifFall").hide();
  $("#ifBreadth").hide();
}

$(document).ready(setup);
