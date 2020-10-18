/*eslint-env browser*/
//STEP 1
function show_msg(){
    "use strict";
    window.alert("I have been clicked");
}


//STEP 2
var btn_2 = document.getElementById("btn_2");
btn_2.onclick = function(){
    "use strict";
    window.alert("I have been clicked");
};


//STEP 3
var btn_3 = document.getElementById("btn_3");
btn_3.addEventListener("click",show_msg);


//STEP 4
var btn_4 = document.getElementById("btn_4");
btn_4.addEventListener("click",function(){
    "use strict";
    window.alert("I have been clicked");
});


//STEP 5
window.addEventListener("load", function(){
    "use strict";
    var btn_5 = document.getElementById("btn_5");
    btn_5.addEventListener("click",function(){
        window.alert("I have been clicked");
    });
});