function checkMandatory(){
  var manCheck = document.userData.email.checked || document.userData.text.checked;
  if (manCheck == false){
    alert("Please choose one");
  }
  else{
    window.location.replace("keep_open.html");
  }

}

function emailChecked(){
  $('#isEmailSelected').click(function() {
    $("#emailInfo").toggle(this.checked);
    $("#emailInfo").css("box-shadow", "10px 5px 5px black");
    $("#emailInfo").css("width", "250px");
});
}

function textChecked(){
  $('#isTextSelected').click(function() {
    $("#textInfo").toggle(this.checked);
    $("#serviceInfo").toggle(this.checked);
    $("#textInfo").css("box-shadow", "10px 5px 5px black");
    $("#serviceInfo").css("box-shadow", "10px 5px 5px black");
    $("#textInfo").css("width", "150px");
    $("#serviceInfo").css("width", "200px");
});
}


function setup(){
  $("button").css("color", "black");
  $("#emailInfo").hide();
  $("#textInfo").hide();
  $("#serviceInfo").hide();
  emailChecked();
  textChecked();
  $("#sub").click(checkMandatory);

}



$(document).ready(setup);


/*
function setupHandlers(){
  $("h1").css("color", "black");
  $("i").css("color", "black");

  $("img").on("mouseenter", function(){
    $(this).animate({width: 2000}, 2000);
    //$(this).slideUp();
  });

  $("img").on("mouseleave", function(){
    $(this).animate({width: 50}, 2000);
  });

  $("#bragging").click(function(){
    alert("Haha... I don't have any achievements :')");
  });
}

$(document).ready(setupHandlers);

*/
/*
http://stackoverflow.com/questions/11787665/making-sure-at-least-one-checkbox-is-checked
http://stackoverflow.com/questions/901712/how-do-i-check-if-a-checkbox-is-checked-in-jquery
http://stackoverflow.com/questions/22238368/multiple-checkboxes-at-least-1-required
*/
