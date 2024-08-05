document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('.btn');
  let currentInput = '';
  let operator = '';
  let operand1 = '';
  let operand2 = '';

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const value = this.getAttribute('data-value');

      if (value === 'C') {
        currentInput = '';
        operator = '';
        operand1 = '';
        operand2 = '';
        display.value = '';
      } else if (value === '=') {
        operand2 = currentInput;
        display.value = evaluate(operand1, operator, operand2);
        currentInput = display.value;
        operand1 = '';
        operator = '';
        operand2 = '';
      } else if (this.classList.contains('operator')) {
        if (currentInput === '' && operator !== '') {
          display.value = 'Error';
        } else {
          operand1 = currentInput;
          operator = value;
          currentInput = '';
        }
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function evaluate(operand1, operator, operand2) {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return 'Error';
        } else {
          return num1 / num2;
        }
      default:
        return 'Error';
    }
  }
});
