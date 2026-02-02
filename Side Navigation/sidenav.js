


// Set the width of the side navigation to 250px
function openNav1(){
    document.getElementById("mySideNav").style.width = "250px";
}

// Set the width of the side navigation to 0
function closeNav1(){
    document.getElementById("mySideNav").style.width = "0";
}


// Side nav push content
function openNav2(){
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav2(){
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}


// Side nav push content with some opacity
function openNav3(){
    document.getElementById("mySideNav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("main2").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
}

function closeNav3(){
    document.getElementById("mySideNav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("main2").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


// Side nav covers the whole page (100% width)
function openNav4(){
    document.getElementById("mySideNav").style.width = "100%";
}

function closeNav4(){
    document.getElementById("mySideNav").style.width = "0";
}


