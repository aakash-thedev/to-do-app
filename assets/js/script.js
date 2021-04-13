var checkBoxArray = document.getElementsByClassName('myCheck');
var delete_btn = document.getElementById('delete-btn');
var tasks = document.getElementsByClassName('taskBar');

// by defualt set the delete button disabled and color grey
delete_btn.style.backgroundColor = "grey"


// when any check box gets selected trigger this below function
function checkSelected(){

    // maintain how many checkboxes are selected
    let checkedCount = 0;

    // for every check box selected , mark the particular task done ! | Line Through |
    for(let i=0; i<checkBoxArray.length; i++){
        if(checkBoxArray[i].checked){
            tasks[i].style.textDecoration = "line-through";
            checkedCount++;
        }

        else{
            tasks[i].style.textDecoration = "none";
        }
    }

    // if none are selected then disable the delete button
    if(checkedCount == 0){
        delete_btn.disabled = true;
        delete_btn.style.backgroundColor = "grey";
    }

    else{
        delete_btn.disabled = false;
        delete_btn.style.backgroundColor = "red";
    }
}