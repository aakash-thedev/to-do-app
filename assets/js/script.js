var checkBoxArray = document.getElementsByClassName('myCheck');
var delete_btn = document.getElementById('delete-btn');
var tasks = document.getElementsByClassName('taskBar');

delete_btn.style.backgroundColor = "grey"

function checkSelected(){

    let checkedCount = 0;

    for(let i=0; i<checkBoxArray.length; i++){
        if(checkBoxArray[i].checked){
            tasks[i].style.textDecoration = "line-through";
            checkedCount++;
        }

        else{
            tasks[i].style.textDecoration = "none";
        }
    }

    if(checkedCount == 0){
        delete_btn.disabled = true;
        delete_btn.style.backgroundColor = "grey";
    }

    else{
        delete_btn.disabled = false;
        delete_btn.style.backgroundColor = "red";
    }
}