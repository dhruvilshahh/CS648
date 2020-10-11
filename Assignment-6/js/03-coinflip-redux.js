var coinFlip;
var result="";
for (var i=0;i<10;i++){
    coinFlip = Math.round(Math.random());
    result = (coinFlip == 0)? "Heads":"Tails";
    window.console.log(result);
}