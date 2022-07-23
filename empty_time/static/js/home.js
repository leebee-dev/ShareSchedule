window.onload = function(){    
    let class_add = document.getElementsByClassName('add-class-btn');
    class_add[0].addEventListener('click', function(event){
        popup();
    });

    let class_add_complete_btn = document.getElementById("complete-add");
    class_add_complete_btn.addEventListener('click',function(event){
        popdown();
    });

    let add_dialog = document.getElementById("class-adding");
    add_dialog.style.visibility = "hidden";


    // let class_item_to_write = document.getElementById('user_class_info').innerText;
    // let class_items = JSON.parse(class_item_to_write);

    let table = document.getElementById("table-schedule");

    refresh_table(table);

};

function refresh_table(table,class_items){

    // let table = $('table_schedule');

    let rowLen = table.rows.length;
    // let celLen = table.cells.length;

    console.log(rowLen)
    // console.log(celLen)
    table.rows[0].cells[1].style.backgroundColor = "#6667AB";

    
    // let tds = table.rows[3].getElementsByTagName("td");
    // console.log(tds);
    // tds.style.backgroundColor = "red"

    // console.log(tds[3].firstChild);
    
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
