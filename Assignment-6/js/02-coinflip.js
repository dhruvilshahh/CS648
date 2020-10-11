var coinFlip = Math.floor(Math.random()*10);
const certainNumber = 5;
var result;
var choice = window.prompt("Heads or Tails? \n Enter H/T.....");
choice = choice.toUpperCase();
if (coinFlip < certainNumber){
    result = "H";
}
else{
    result = "T";
}
if (result=="H" && choice== "H"){
    alert("The flip was heads and you chose heads...you win!");
}
else if (result=="H" && choice== "T"){
    alert("The flip was heads but you chose tails...you lose!");
}
else if (result=="T" && choice== "H"){
    alert("The flip was tails but you chose heads...you lose!");
}
else if (result=="T" && choice== "T"){
    alert("The flip was tails and you chose tails...you win!");
}
else{
    alert("Invalid input...");
}