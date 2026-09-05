const answer = document.getElementById("Answer");

function EnterNumber(number) {
    answer.value += number;
}

function EnterOperator(operator) {
    if (answer.value === "" && operator !== "-") {
        return;
    }

    if (/[+\-*/.]$/.test(answer.value)) {
        answer.value = answer.value.slice(0, -1) + operator;
        return;
    }

    answer.value += operator;
}

function EnterClear() {
    answer.value = "";
}

function EnterEqual() {
    if (answer.value === "" || /[+\-*/.]$/.test(answer.value)) {
        return;
    }

    try {
        answer.value = calculateExpression(answer.value);
    } catch (error) {
        answer.value = error.message;
    }
}

function calculateExpression(expression) {
    const tokens = expression.match(/(?:\d+(?:\.\d*)?|\.\d+|[+\-*/])/g);

    if (!tokens || tokens.join("") !== expression) {
        throw new Error("Invalid input");
    }

    const values = [];
    const operators = [];
    const precedence = { "+": 1, "-": 1, "*": 2, "/": 2 };

    function calculateTopOperation() {
        const right = values.pop();
        const left = values.pop();
        const operator = operators.pop();

        if (operator === "+") values.push(left + right);
        if (operator === "-") values.push(left - right);
        if (operator === "*") values.push(left * right);
        if (operator === "/") {
            if (right === 0) throw new Error("Cannot divide by zero");
            values.push(left / right);
        }
    }

    tokens.forEach((token) => {
        if (!Number.isNaN(Number(token))) {
            values.push(Number(token));
            return;
        }

        while (
            operators.length &&
            precedence[operators.at(-1)] >= precedence[token]
        ) {
            calculateTopOperation();
        }

        operators.push(token);
    });

    while (operators.length) {
        calculateTopOperation();
    }

    return values[0];
}
