let calc = (type, assign) => {
  let display = document.getElementById('display');
  type === 'value'
    ? display.value += assign
    : (() => {
      switch (assign) {
        case 'c':
          display.value = '';
          break;
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
          display.value += assign;
          break;
        case '=':
          let result = display.value;
          document.getElementById('display').value = eval(result);
      };
    })();
};