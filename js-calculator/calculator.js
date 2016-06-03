var num1 = [];
var num2 = [];
var operand = null;
var operands = /[\+\-\/x=]/

// Calculator Functions
function add(n1, n2) {
  var result = n1 + n2;
  return result;
};
function multiply(n1,n2) {
  var result = n1 * n2;
  return result;
};
function calcClear() {
  num1 = [];
  num2 = [];
  operand = null;
};
function numberize(array) {
  return +array.join('')
};


$(document).ready(function() {
  // START jQuery

  function calculator(input) {
    // function for inputting digits and decimals
    var pushNumber = function(numArray) {
      if (numArray.length < 17) {
        if (input === ".") {
          if (numArray.indexOf(".") === -1) {
            numArray.push(input);
          }
        } else {
          numArray.push(input);
        }
      } else {
        alert("something")
      }
      $("#screen").html(numArray);
    };

    // c pressed
    if (/c/i.test(input)) {
      calcClear();
      $("#screen").html("0")
    };

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
    };

    // operands pressed
    if (operands.test(input) && num1.length > 0) {
      if (num2.length > 0) {
        var n1 = numberize(num1);
        var n2 = numberize(num2);
        result = null;

        switch (operand) {
          case '+':
            result = add(n1,n2);
            break;
          case '-':
            result = n1 - n2;
            break;
          case 'x':
            result = multiply(n1,n2);
            break;
          case '/':
            result = n1 / n2;
            break;
          case '=':
            break;
        }
        num1 = result.toString().split('');
        num2 = [];
        $("#screen").html(num1);
      }
      operand = input;
    };
  };

  // using keydown
  $(document).keydown(function(key) {
    var input = String.fromCodePoint(key.which);
    switch (key.which) {
      case 96:
      input = "0";
      break;
      case 97:
      input = "1";
      break;
      case 98:
      input = "2";
      break;
      case 99:
      input = "3";
      break;
      case 100:
      input = "4";
      break;
      case 101:
      input = "5";
      break;
      case 102:
      input = "6";
      break;
      case 103:
      input = "7";
      break;
      case 104:
      input = "8";
      break;
      case 105:
      input = "9";
      break;
      case 13:
      input = "=";
      break;
      case 106:
      input = "x";
      break;
      case 107:
      input = "+";
      break;
      case 109:
      input = "-";
      break;
      case 111:
      input = "/";
      break;
    }
    calculator(input);
  });

  // using mouseclick
  $(".key").click(function() {
    var input = $(this).html();
    calculator(input);
  });

  // END jQuery
});
