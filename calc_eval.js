const buttons = document.querySelectorAll(".buttons");
const buttonsCount = buttons.length;
const result = document.querySelector("#result-now");

let iter = 0;

for (iter = 0; iter < buttonsCount; iter++) {
  buttons[iter].onclick = operation;
}


addEventListener.onclick
function operation() {
  const currentValue = this.innerText;
  if (currentValue == "=") {
    try {
        result.value = eval(result.value);
    } catch (e) {
      result.value = "error";
    }
    return;
  }

  if (currentValue == "AC") {
    result.value = '0';
  } else if (currentValue == "+-") {
    result.value *= -1;
  // } else if (result.value == "." || currentValue == ".") {
  //   result.value = "";
   }
  else {
    result.value += currentValue;
  }
}