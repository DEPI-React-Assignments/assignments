function EnterNumber(number) {
  document.getElementById("Answer").value += number;
}

function EnterOperator(operator) {
  document.getElementById("Answer").value += operator;
}

function EnterClear() {
  document.getElementById("Answer").value = "";
}

function EnterEqual() {
  let answer = document.getElementById("Answer");
  answer.value = eval(answer.value);
}
