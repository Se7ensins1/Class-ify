function berkClicked(){
  $("#tester").attr("src", "../static/imgs/geometry.png");
}



function setup(){
  var bClicked = false;
$("#berk").click(function(){
  bClicked = true;
});

if (bClicked){
  berkClicked();
}

}




$(document).ready(setup);
