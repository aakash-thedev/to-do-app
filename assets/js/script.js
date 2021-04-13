var checkBox = document.getElementsByClassName('myCheck');
var delete_btn = document.getElementById('delete-btn');

function checkSelected(checkBox){

    if(checkBox.checked){
        delete_btn.disabled = false;
    }
}