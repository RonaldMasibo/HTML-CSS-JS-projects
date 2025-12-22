
// Initialising the choices to be voted for
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
}