window.onload = function(){    
    let addd = document.getElementById('add_schedule');
    addd.addEventListener('click', popup)
}

function popup(){
    let name = "create_page";
    let option = " width= 500, height= 500, top= 100, left = 200, location = no"

    window.open("create.html" , name , option);

}
