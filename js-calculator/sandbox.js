if (!operand && /[0-9\.]/.test(input)) {
  if (input === ".") {
    if (num1.indexOf(".") === -1) {
      num1.push(input);
    }
  } else {
    num1.push(input);
  }
  $("#screen").html(num1);
} else if (operand != '=' && /[0-9\.]/.test(input)) {
  if (input === ".") {
    if (num2.indexOf(".") === -1) {
      num2.push(input);
    }
  } else {
    num2.push(input);
  }
  $("#screen").html(num2);
} else if (operand === '=' && /[0-9\.]/.test(input)) {
  clear();
  num1.push(input);
  $("#screen").html(num1);
}

var pushNumber = function(numArray) {
  if (input === ".") {
    if (numArray.indexOf(".") === -1) {
      numArray.push(input);
    }
  } else {
    numArray.push(input);
  }
  $("#screen").html(numArray);
}

// numbers pressed
if (/[0-9\.]/.test(input)) {
  if (!operand) {
    pushNumber(num1);
  } else if (operand != "=") {
    pushNumber(num2);
  } else if (operand === "=") {
    calcClear();
    pushNumber(num1);
  }
}
