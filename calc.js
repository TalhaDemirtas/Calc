const btn = document.querySelector(".buttons");
let entry = document.querySelector("#result-now");
const secondary = document.querySelector("#result-pre");
let previousOperand = "";
let currentOperand = "";
let firstNum = "";
let secondNum = "";
let percentPressed = false;

function setOperand(operand) {
  if (previousOperand === "" && entry.textContent !== "") {
    previousOperand = operand;
    firstNum = +entry.textContent;
    secondary.textContent = `${firstNum} ${previousOperand}`;
    entry.textContent = "";
  } else if (previousOperand !== "" && entry.textContent === "") {
    previousOperand = operand;
    secondary.textContent = `${firstNum} ${previousOperand}`;
  } else if (entry.textContent !== "" && !equalPressed) {
    secondNum = +entry.textContent;
    currentOperand = operand;
    firstNum = calculate(previousOperand);
    secondary.textContent = `${firstNum} ${currentOperand}`;
    entry.textContent = "";
    secondNum = "";
    previousOperand = operand;
  } else if (entry.textContent !== "" && equalPressed) {
    previousOperand = operand;
    firstNum = +entry.textContent;
    secondNum = "";
    secondary.textContent = `${formatNumber(firstNum)} ${previousOperand}`;
    entry.textContent = "";
    equalPressed = false;
  }
}
let temp;
let equalPressed = false;
function equal() {
  if (firstNum !== "" && entry.textContent !== "") {
    if (secondNum === "") {
      secondNum = +entry.textContent;
      temp = +entry.textContent;
    } else if (secondNum !== "") {
      secondNum = temp;
    }
    firstNum = calculate(previousOperand);
    entry.textContent = formatNumber(firstNum);
    secondary.textContent = "";
    equalPressed = true;
  }
}
function appendNumber(number) {
  entry.textContent.length < 10 ? (entry.textContent += number) : null;
}
function checkEqual() {
  entry.textContent === "0" ? (entry.textContent = "") : entry;
  if (equalPressed) {
    entry.textContent = "";
    firstNum = previousOperand = secondNum = "";
    equalPressed = false;
  }
  if (percentPressed) {
    entry.textContent = "";
    percentPressed = false;
  }
}
function calculate(operand) {
  switch (operand) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "x":
      return firstNum * secondNum;
    case "÷":
      return firstNum / secondNum;
    case "%":
      return firstNum / 100;
    case "±":
      return firstNum * -1;
  }
}
function clearAll() {
  entry.textContent = "";
  secondary.textContent = "";
  firstNum = "";
  secondNum = "";
  previousOperand = "";
  currentOperand = "";
}

function formatNumber(number) {
  return number.toString().length > 10 ? number.toExponential(5) : number;
}

btn.addEventListener("click", (e) => {
  if (e.target.classList.contains("nn")) {
    checkEqual();
    appendNumber(e.target.textContent);
  } else if (e.target.classList.contains("point")) {
    checkEqual();
    if (entry.textContent.length < 9) {
      entry.textContent == "" ? (entry.textContent += "0.") : entry;
    }
    !entry.textContent.includes(".") ? (entry.textContent += ".") : entry;
  }
  else if (e.target.classList.contains("op")) {
    setOperand(e.target.textContent);
  }
  else if (e.target.classList.contains("equal")) {
    equal();
  }
  else if (e.target.classList.contains("ac")) {
    clearAll();
  }
  else if (e.target.classList.contains("plusminus" || "percent")) {
    if (entry.textContent) {
      firstNum = entry.textContent;
      entry.textContent = calculate(e.target.textContent);
    }
    e.target.classList.contains("percent")
      ? (percentPressed = true)
      : percentPressed;
  }
});