
// Initialize the bars icon
const toggleBtn = document.querySelector(".toggleBtn");

// Initialise the navigation bar
const links = document.querySelector(".links");


// Clicking the button to toggle the navigation bar
toggleBtn.addEventListener("click", ()=>{

    if (links.classList.contains("active")){
        links.classList.remove("active");
    } else {
        links.classList.add("active");
    }
});