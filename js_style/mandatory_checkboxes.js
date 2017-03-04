function checkMandatory(){
  var manCheck = document.userData.email.checked || document.userData.text.checked;
  if (manCheck == false){
    alert("Please choose one");
  }

}


function setup(){
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
