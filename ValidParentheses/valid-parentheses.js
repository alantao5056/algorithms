class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  };

  push(item) {
    this.array.push(item);
  };

  peek() {
    return this.array[this.array.length - 1];
  }

  pop() {
    this.array.pop();
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {

  const parentheses = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const stack = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (stack.peek() === s[i]) {
      stack.pop();
    } else {
      stack.push(parentheses[s[i]]);
    }
  }

  return stack.size() === 0;

};

module.exports = isValid;