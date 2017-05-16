function obtainUserData(){
    var sem = $("#semester option:selected").text();
    var sub = $("#career option:selected").text();
    var num = $("#classNum").val();
    console.log(sem);
    console.log(sub);
    console.log(num);
}

function setup(){
    $("#search").click(obtainUserData);
}

function testJS(){

var b = document.getElementById('career').value

document.getElementById('here').innerHTML = b;

}


$(document).ready(setup)


