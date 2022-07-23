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


    let class_item_to_write = document.getElementById('user_class_info').innerText;
    // let class_items = JSON.parse(class_item_to_write);

    let table = document.getElementById("table-schedule");

    let friend_items = document.getElementsByClassName("major-name-container");

    for(i=0; i<friend_items.length; i++){
        friend_items[i].addEventListener('click',function(){
            this.children[0].children[0].checked = true;
            for(i = 0; i<5; i++){
                for(j = 0; j<20; j++) {
                    if(j%2 != 0){
                        table.rows[j].cells[i].style.backgroundColor = "#ffffff";
                    }else{
                        table.rows[j].cells[i+1].style.backgroundColor = "#ffffff";
                    }
                }
            }
            refresh_table(table, class_item_to_write);
        });
    }

    refresh_table(table,class_item_to_write);

};

function refresh_table(table,user_class,){

    // let table = $('table_schedule');

    let rowLen = table.rows.length;
    // let celLen = table.cells.length;
    let user_id = user_class[2];

    let user_class_json = JSON.parse(user_class);

    // console.log(user_id);
    // console.log(celLen)
    // table.rows[4].cells[1].style.backgroundColor = "#6667AB";

    // console.log(user_class_json);

    let all_ids = Object.keys(user_class_json);

    // console.log(all_ids);

    const ROW = 5;
    const COLUMN = 20;

    let empty_schedule = new Array(ROW);  // [empty x 2]

    // 이차원 배열의 열을 2로 지정 
    for (var i = 0; i < ROW; i++) {
        empty_schedule[i] = new Array(COLUMN).fill(1);
    }

    // console.log(user_class_json[user_id]);
    let user_schedule = user_class_json[user_id]

    for(i = 0; i<5; i++){
        for(j = 0; j<20; j++) {
            if(user_schedule[i][j]==0){
                empty_schedule[i][j] = 0
            }
        }
    }

    let checked_friends = [];

    let friends_list = document.getElementsByClassName('ghost-box');

    for(k=0; k<friends_list.length; k++){
        if(friends_list[k].checked){
            checked_friends.push(friends_list[k].parentNode.parentNode.id);
            console.log(checked_friends);
        }
    }

    for(l=0; l<checked_friends.length; l++){
        console.log("checked_friends",checked_friends[l]);
        let friend_schedule = user_class_json[checked_friends[l]]
        
        for(i = 0; i<5; i++){
            for(j = 0; j<20; j++) {
                if(friend_schedule[i][j]==0){
                    empty_schedule[i][j] = 0
                }
            }
        }
    }

    // table.rows[1].cells[0].style.backgroundColor = "#6667AB";

    console.log(empty_schedule);

    for(i = 0; i<5; i++){
        for(j = 0; j<20; j++) {
            if(empty_schedule[i][j]==1){
                // console.log(j,i+1);
                if(j%2 != 0){
                    table.rows[j].cells[i].style.backgroundColor = "#6667AB";
                }else{
                    table.rows[j].cells[i+1].style.backgroundColor = "#6667AB";
                }
                
            }
        }
    }

    

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


