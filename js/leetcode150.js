/**
 * @param {string[]} tokens
 * @return {number}
 */

const computationalChars = ['+', '-', '*', '/'];

var evalRPN = function (tokens) {
  const stack = [];
  tokens.forEach(char => {
    if (computationalChars.includes(char)) {
      const num2 = stack.pop();
      const num1 = stack.pop();
      let result;
      switch (char) {
        case '+':
          stack.push(num1 + num2);
          break;
        case '-':
          stack.push(num1 - num2);
          break;
        case '*':
          stack.push(num1 * num2);
          break;
        case '/':
          if (num1 / num2 > 0) {
            stack.push(Math.floor(num1 / num2));
          }
          else {
            stack.push(Math.ceil(num1 / num2));
          }
          break;
      }
    }
    else {
      stack.push(parseInt(char));
    }
  });
  return stack.pop();
};
evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]);