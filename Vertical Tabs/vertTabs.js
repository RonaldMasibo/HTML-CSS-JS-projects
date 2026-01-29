

function openTab(evt, TabNumber){
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" & hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" & remove class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++){
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //Show the current tab & add an "active" class to the button that opened the tab
    document.getElementById(TabNumber).style.display = "block";
    evt.currentTarget.className += " active";

}

// Choosing the default tab that will be displayed
document.getElementById("defaultTab").click();