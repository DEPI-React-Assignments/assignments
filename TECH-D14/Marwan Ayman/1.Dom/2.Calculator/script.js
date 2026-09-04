function EnterNumber(value) {
    var answer = document.getElementById("Answer");

    if (answer.value == "Enter a number") {
        answer.value = "";
    }

    answer.value += value;
}


function EnterOperator(value) {
    var answer = document.getElementById("Answer");

    if (answer.value == "") {
        answer.value = "Enter a number";
    }
    else {
        answer.value += value;
    }
}


function EnterClear() {
    var answer = document.getElementById("Answer");

    answer.value = "";
}


function EnterEqual() {
    var answer = document.getElementById("Answer");

    if (answer.value == "") {
        answer.value = "Enter a number";
    }
    else {
        var last = answer.value.charAt(answer.value.length - 1);

        if (last == "+" || last == "-" || last == "*" || last == "/") {
            answer.value = "Enter a number";
        }
        else {
            answer.value = eval(answer.value);
        }
    }
}