
// Initialising all the variables to enable access to the values in the HTML file

const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderLength");
const passBox = document.getElementById("passBox");

const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const generateBtn = document.getElementById("getBtn");
const copyBtn = document.getElementById("copyIcon");
const passIndicator = document.getElementById("passIndicator");


// Initialising the characters &/or symbols that will make up the password
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


// Updating the Slider value which is desplayed in the "Password Length" label
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value
    generatePassword();
});

function generatePassword(){
    const length = inputSlider.value;
    let characters = "";
    let password = "";

    // Updating the number of characters in the password 
    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEl.checked ? symbols : "";


    // Generate a random password
    for(let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    };


    // Display the password in the passbox
    passBox.value = password;

    // Will show color of password that corresponds to its strength
    updatePasswordIndicator();
};


// Will generate the password once the generateBtn button is clicked
generateBtn.addEventListener("click", () => {
    generatePassword();
});


// Will show the color of the password indicator according to the values of getPasswordStrength() function
function updatePasswordIndicator(){
    // Check whether a password is weak, medium or strong 
    const passwordStrength = getPasswordStrength(passBox.value);

    // Updating the class name by adding the classes said on the CSS file (weak, medium or strong)
    passIndicator.className = "pass-indicator " + passwordStrength; // "pass-indicator" is the original class name on the HTML file
};


// Will show whether password is weak, medium or strong
function getPasswordStrength(password){
    if(password.length <= 10){
        return "weak";
    }else if (password.length <= 20){
        return "medium";
    }else {
        return "strong";
    }
};


// When page is reloaded, password strength is weak since no password will be shown
window.addEventListener('DOMContentLoaded', () => {
    updatePasswordIndicator();
});


// Copying the password
copyBtn.addEventListener("click", () => {

    if (passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox);
        copyBtn.innerText = "check";

        // Will change the icon back to the 'copy' icon
        setTimeout(() => {
            copyBtn.innerHTML = "content_copy";
        }, 3000); // 3000 is the time it will take to change back to the original icon (3s)
    }

});