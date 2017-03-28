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

$(document).ready(setup)