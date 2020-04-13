{/* <button id="one"></button>
<button id="two"></button> */}

var one = document.querySelector("#one")
var two = document.querySelector("#two")

function callbackOne(){
    var two = document.querySelector("#two");
    if(!two)
        return;
    
    two.remove();
    one.addEventListener("hover",callbackOne)
}

function callbackTwo(){
    var one = document.querySelector("#one");
    if(!one)
        return;
    
    one.remove();
    two.addEventListener("hover",callbackTwo)
}

one.addEventListener("click", callbackOne)
two.addEventListener("click", callbackTwo)