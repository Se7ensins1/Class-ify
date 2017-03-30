/*function checkMandatory(){
  var manCheck = document.userData.email.checked || document.userData.text.checked;
  if (manCheck == false){
    alert("Please choose one");
  }

}*/

function emailChecked(){
  $('#isEmailSelected').click(function() {
    $("#emailInfo").toggle(this.checked);
    $("#emailInfo").css("box", "10px 5px 5px black");
    $("#emailInfo").css("width", "250px");
});
}

function textChecked(){
  $('#isTextSelected').click(function() {
    $("#textInfo").toggle(this.checked);
    $("#serviceInfo").toggle(this.checked);
    $("#textInfo").css("box", "10px 5px 5px black");
    $("#serviceInfo").css("box", "10px 5px 5px black");
    $("#textInfo").css("width", "150px");
    //$("#serviceInfo").css("width", "200px");
});
}


function setup(){
  $("button").css("color", "black");
  $("#emailInfo").hide();
  $("#textInfo").hide();
  $("#serviceInfo").hide();
  emailChecked();
  textChecked();
  //$("#sub").click(checkMandatory);

}

function validateForm() {
    var validEmail = document.forms["userData"]["emailName"].value;
    var validNumber = document.forms.userData.phoneNumber.value;
    var validCompany = $("#serviceInfo option:selected").val();
    var valid = true;
    var manCheck = document.userData.email.checked || document.userData.text.checked;
    if (manCheck == false){
      alert("Please choose one");
      valid = false;
    }
    if ((validEmail == "" || validEmail.indexOf('@') == -1) && document.userData.email.checked) {
        alert("Email must be filled out");
        valid = false;
    }
    /*if ((validNumber == "" || validNumber.indexOf('-') != -1 || validNumber.indexOf('()') != -1 || validNumber.indexOf(')') != -1) && document.userData.text.checked) {
        alert("Number must be filled out correctly");
        valid = false;
    }
    if (validCompany == "" && document.userData.text.checked) {
        alert("Company must be filled out");
        valid = false;
    }*/
    if (document.userData.text.checked){
      if (validNumber == "" || validNumber.indexOf('-') != -1 || validNumber.indexOf('()') != -1 || validNumber.indexOf(')') != -1 || validNumber.length != 10) {
          alert("Number must be filled out correctly");
          valid = false;
      }
      if (validCompany == "Service Company") {
          alert("Company must be selected");
          valid = false;
      }
    }
    if (valid == true){
      window.location.replace("keep_open.html")
    }
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
