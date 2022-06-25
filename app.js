function clearScreen(){
    var clear = document.getElementById("screen");
    clear.innerText = " ";
}
var inputData;  
function getValue7(){
    var value = 7;
    screen(value);
}
function getValue8(){
    var value = 8;
    screen(value);
}
function getValue9(){
    var value = 9;
    screen(value);
}
function getValueMultiply(){
    var value = "*";
    screen(value);
}
function getValue4(){
    var value = 4;
    screen(value);
}
function getValue5(){
    var value = 5;
    screen(value);
}
function getValue6(){
    var value = 6;
    screen(value);
}
function getValueMinus(){
    var value = "-";
    screen(value);
}
function getValue1(){
    var value = 1;
    screen(value);
}
function getValue2(){
    var value = 2;
    screen(value);
}
function getValue3(){
    var value = 3;
    screen(value);
}
function getValuePlus(){
    var value = "+";
    screen(value);
}
function getValue0(){
    var value = 0;
    screen(value);
}
function getValuePoint(){
    var value = ".";
    screen(value);
}
function getValueDivide(){
    var value = "/";
    screen(value);
}
function getValueEquals(){
    var value = "=";
    screen(value);
}
function screen(v) {
    if (v === "=") {
        inputData = document.getElementById("screen");
        var data = inputData.innerText;
        var total = eval(data);
        
        document.getElementById("screen").innerText = total;
    } 
    else {
        document.getElementById("screen").innerText += v;
    }
}


