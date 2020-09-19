/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
/**console.log("Hello world");


function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}


 
function checkLogic(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == '0' || s.charAt(i) == '1') {
            return true;
        }
    }
        return false;
}
function send(op, num1, num2) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

function doNot() {
    let num1 = $("#num1").val();
    if (! checkLogic(num1)) {
        alert("Num1 is not a logical number");
        return;
    }
    send("NOT", num1);
}


function opLogic(op){
    
    let num1 = $("#num1").val();
    if(!checkLogic(num1)){
        alert ("Number is not logical");
        return;
    }
   
    let num2 = $("#num2").val();
    if(!checkLogic(num2)){
        alert("Number is not logical");
        return;
    }
    
    if(num1.length != num2.length){
        alert("Lengths are not the same");
        return;
    }
        
    send(op,num1,num2);
}

function doOr() {
    opLogic("OR");
    // probably should get two numbers and do Or
}


function doAnd() {
    opLogic("AND");
    // probably should get two numbers and do And
}


function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}


$(document).ready(setup);




/**
 * Add a hello world right at the top to make sure the Javascript is loaded
 */
console.log("Hello world");

/**
 * Success is called when the answer is returned from the server. This
 * updates the answer text to the answer returned by the server
 */
function success(data) {
    console.log("success=" + data);
    $("#answer").text("Answer=" + data);
}

/**
 * Return true if the string is a logical string, ie. only 1s or 0s
 */
function logic(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) != '0' && s.charAt(i) != '1') {
            return false;
        }
    }
    return true;
}

/**
 * Given the op and the numbers, send the operands to the server and
 * set up the success function to receive the answer once the server has
 * calculated it.
 */
function send(op, num1, num2=0) {
    let url = "/calculate/op/" + op + "/num1/" + num1 + "/num2/" + num2;
    console.log(url);
    $.get(url, success);
}

/**
 * Handle the user clicking the NOT button
 */
function doNot() {
    let num1 = $("#num1").val();
    if (! logic(num1)) {
        alert("is not a logical number");
        return;
    }
    send("NOT", num1);
}

/**
 * Handle the user clicking the OR or AND buttons
 */
function doDoubleOp(op) {
    let num1 = $("#num1").val();
    if (! logic(num1)) {
        alert("Num1 is not a logical number");
        return;
    }

    let num2 = $("#num2").val();
    if (! logic(num2)) {
        alert("Num2 is not a logical number");
        return;
    }

    if (num1.length != num2.length) {
        alert("Operands must be of the same length");
        return;
    }

    send(op, num1, num2)
}

/**
 * Handle the user clicking the OR button
 */
function doOr() {
    doDoubleOp("OR");
}

/**
 * Handle the user clicking the AND button
 */
function doAnd() {
    doDoubleOp("AND")
}

/**
 * This function is called on document ready to set up the handlers
 * that are called when each button is clicked
 */
function setup() {
    $("#not").click(doNot);
    $("#or").click(doOr);
    $("#and").click(doAnd);
}

/**
 * When the document has fully loaded and is ready, call the setup function
 */
$(document).ready(setup);