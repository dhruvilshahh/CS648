var  choice_computer;
var choice_user = (window.prompt("Enter your choice rock, paper or scissors :")).toLowerCase();
var random_number = Math.random();
if (choice_user === 'paper' || choice_user === 'rock' || choice_user === 'scissors'){
    if (random_number < 0.30) choice_computer = "rock"; 
    else if (random_number >= 0.30  && random_number < 0.65) choice_computer = "paper";
    else choice_computer = "scissors";
    window.console.log("You chose "+choice_user+" Computer chose " +choice_computer);
    game(choice_user,choice_computer);
}
else {
    window.alert("You have entered invalid choice...");
}
function game(choice_user,choice_computer){
    if(choice_user==="scissors"){
        if(choice_user === choice_computer){
            window.alert("The result is a tie!");
        }
        else if(choice_computer==="rock"){
            window.alert("Computer chose rock & User chose scissors \n Computer Wins!");
        }
        else{
            window.alert("User chose scissors & Computer chose paper \n User Wins!");
        }
    }
    if(choice_user==="rock"){
        if(choice_user === choice_computer){
            window.alert("The result is a tie!");
        }
        else if(choice_computer==="scissors"){
            window.alert("User chose Rock & Computer chose Scissors \n User Wins!");
        }
        else{
            window.alert("Computer chose Paper & User chose Rock \n Computer Wins!");
        }
    }
    if(choice_user==="paper"){
        if(choice_user === choice_computer){
            window.alert("The result is a tie!");
        }
        else if(choice_computer==="rock"){
            window.alert("User chose Paper & Computer chose Rock \n User Wins!");
        }
        else{
            window.alert("Computer chose Scissors & User chose Paper \n Computer Wins!");
        }
    }
}