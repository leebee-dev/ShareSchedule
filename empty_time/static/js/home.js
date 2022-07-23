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


    let class_item_to_write = document.getElementById('user_class_info').innerText;
    // let class_items = JSON.parse(class_item_to_write);

    let table = document.getElementById("table-schedule");

    refresh_table(table,class_item_to_write);

};

function refresh_table(table,user_class){

    // let table = $('table_schedule');

    let rowLen = table.rows.length;
    // let celLen = table.cells.length;
    let user_class_json = JSON.parse(user_class);

    console.log(typeof user_class_json);
    // console.log(celLen)
    table.rows[4].cells[1].style.backgroundColor = "#6667AB";

    console.log(user_class);

    let user_id = Object.keys(user_class_json);

    console.log(user_id);
    
}

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


