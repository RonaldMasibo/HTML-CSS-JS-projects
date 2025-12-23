
// Initialising the choices to be voted for as an array of objects
const choices = [
    {id:"choice1", text:"Manchester United", votes:0},
    {id:"choice2", text:"Real Madrid", votes:0},
    {id:"choice3", text:"Barcelona", votes:0},
    {id:"choice4", text:"Chelsea", votes:0},
    {id:"choice5", text:"Arsenal", votes:0}
];


function VotesCasted(){

    // Initialising the choice selected
    const selectedChoice = document.querySelector('input[name="poll"]:checked');

    // Checking if an option has been selected
    if(!selectedChoice){
        alert("Please choose a club!!");
        return;
    }

    // Initialise the ID of the option selected in the 'choices'
    const choiceId = selectedChoice.value; // Will return the 'ID' value of 'choices'

    // Find the object that has been selected in the 'choices' array
    const selectedChoiceObject = choices.find((choice)=> choice.id === choiceId);

    // Update/Increament the votes of the choice if it's among the choices
    if(selectedChoiceObject){
        selectedChoiceObject.votes++;

        // Calling a Function for displaying the results
        ShowVotes();
    }
};


// Function for displaying results
function ShowVotes(){
    // Initialising the Total Votes element
    const result = document.getElementById('TotalVotes');
    result.innerHTML = "";

    choices.forEach((choice) => {
        // Getting the percentage of votes for each choice
        const percentageVotes = ((choice.votes/getTotalVotes()) * 100).toFixed(2) || 0; // toFixed(2) gets value to 2 decimal places

        // Show the bar width of the votes casted
        const barWidth = percentageVotes > 0 ? percentageVotes + "%" : "0%";

        // Creating a 'div' element for displaying the percentage results
        const ChoiceResult = document.createElement("div");
        ChoiceResult.className = "choice-result";
        ChoiceResult.innerHTML = `
            <span class = "choice-text">${choice.text}</span>
            <div class = "bar-container">
                <div class="bar" style="width: ${barWidth};"></div>
            </div>
            <span class = "Percentage">${percentageVotes}%</span>
        `;

        result.appendChild(ChoiceResult);
    });
};


// Function for returning total number of votes for each choice
function getTotalVotes(){
    return choices.reduce((total, choice) => total + choice.votes, 0); // Check documentation of JS on how to use reduce() function
};

// Calling the function that makes the result be displayed when page is loaded
ShowVotes();