


// Get the modal
var modal = document.getElementById("id01");


// Opening the Modal Sign Up
function openSignUp(){
    modal.style.display = "block";
}

// Closing the Modal Sign Up
function closeSignUp(){
    modal.style.display = "none";
}


// When user clicks anywhere outside the modal (form), it closes
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}