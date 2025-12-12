
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {

    if (b === 0) {
        return "Error (Div by 0)";
    }
    return a / b;
}


function calculate() {

    var num1Input = document.getElementById("num1").value;
    var num2Input = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var resultSpan = document.getElementById("result");


    if (num1Input.trim() === "" || num2Input.trim() === "") {
        alert("請輸入兩個數字！");
        return;
    }


    var n1 = parseFloat(num1Input);
    var n2 = parseFloat(num2Input);

    if (isNaN(n1) || isNaN(n2)) {
        alert("請輸入有效的數字格式！");
        return;
    }

    var finalResult;


    switch (operator) {
        case "+":
            finalResult = add(n1, n2);
            break;
        case "-":
            finalResult = subtract(n1, n2);
            break;
        case "*":
            finalResult = multiply(n1, n2);
            break;
        case "/":
            finalResult = divide(n1, n2);
            break;
        default:
            finalResult = "Invalid Op";
    }


    if (finalResult === "Error (Div by 0)") {
        alert("不能除以零！"); 
        resultSpan.innerText = "Error";
    } else {

        resultSpan.innerText = finalResult.toFixed(2);
    }
}