window.onload = function(){    
    let class_add = document.getElementsByClassName('add-class-btn');
    class_add[0].addEventListener('click', function(event){
        popup();
    });

    let class_add_complete_btn = document.getElementById("complete");
    class_add_complete_btn.addEventListener('click',function(event){
        popdown();
    });

    let add_dialog = document.getElementById("class-adding");
    add_dialog.style.visibility = "hidden";
};

function popup(){
    console.log("popup")
    let add_dialog = document.getElementById("class-adding");
    add_dialog.style.visibility = "visible";
}

function popdown(){
    console.log("popdown")
    let add_dialog = document.getElementById("class-adding");
    add_dialog.style.visibility = "hidden";
}

$(document).ready(function(){
    $("#contents").click(function(){
        $("#popup").fadeIn();
    });
    $("#exit").click(function(){
        $("#popup").fadeOut();
    });
});


