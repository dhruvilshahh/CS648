var first_number, second_number;
first_number = parseInt(window.prompt("Enter first Integer: "));
second_number = parseInt(window.prompt("Enter second Integer: "));
if(first_number>second_number){
    document.write(first_number + " is the larger number.");
}
else if(second_number>first_number){
    document.write(second_number + " is the larger number.");
}
else{
    document.write("Both numbers are equal.");
}