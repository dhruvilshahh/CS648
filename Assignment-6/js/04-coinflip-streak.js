var coinFlip;
var result;
do{
    coinFlip = Math.round(Math.random());
    coinFlip = (coinFlip == 0)? "Heads" : "Tails";
    window.console.log(coinFlip);
}
while(coinFlip !== "Tails");