// Set up some global constants for the program
app.listen(process.env.PORT);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 80;
}
app.listen(port);

function index(req, res) {
    res.redirect('/index.html');
}


 function calcNOT(num) {
    let answer = "";
        for (let digit of num) {
            if (digit == '0') {
                answer += "1";
        }   
        
        else if (digit == "1") {
                answer += "0";
        }    
        
        else {
            return "Invalid number in input";
        }
    }
    console.log("Returning answer=" + answer);
        return answer
    }


function calcCheck(op, num1, num2) {
    if (num1.length != num2.length) {
        return "Invalid lengths";
    }
    let answer = "";
    for (let i = 0; i < num1.length; i++) {
        let digit1 = num1[i];
        let digit2 = num2[i];
        if (op == "OR") {
            if (digit1 == "1" || digit2 == "1") {
                answer += "1";
            } else {
                answer += "0";
            }
        } else if (op == "AND") {
            if (digit1 == "1" && digit2 == "1") {
                answer += "1";
            } else {
                answer += "0";
            }
        }
    }
    return answer;
}

function calculate(req, res) {
    console.log(req.params);
    let answer = "";
    if (req.params.op == "NOT") {
        answer = calcNOT(req.params.num1);
    } 
    else if (req.params.op == "OR") {
        answer = calcCheck(req.params.op, req.params.num1, req.params.num2);
    } 
    else if (req.params.op == "AND") {
        answer = calcCheck(req.params.op, req.params.num1, req.params.num2);
    } 
    else {
        answer = "Invalid operation";
    }

    // Send the answer back to the user
    res.send(answer);
}  

    // We should calculate the answer here
    // let answer = ...

    // Send the answer back to the user
   
// Set up the handlers for Node.js
// -------------------------------

// static files live in "static" folder
app.use(express.static("static"));

// Calling "/" invokes the index function
app.get('/', index);

// Calling "/calculate/..." invokes the calculate function
app.get('/calculate/op/:op/num1/:num1/num2/:num2', calculate);

// Start Express listening at the given port
function logger(){
    console.log("App runnimg at port=" + port);
}
app.listen(port, logger);
    

/**
 * Node.js program for a logical calculator.
 *
 * When called with "/", it returns the index.html static page.
 * When called with "/calculate/op/:op/num1/:num1/num2/:num2", it returns
 * the answer of the logical calculation
 */

