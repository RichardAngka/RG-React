// Dari inisiasi stack dengan maksimal elemen sebanyak 10, implementasikan operasi peek.

module.exports = class Stack {
  constructor() {
    // TODO: answer here
    this.data = [];
    this.size = 10;
    this.top = -1;
  }

  push(elemen) {
    // TODO: answer here
    if (this.top + 1 < this.size) {
      this.top += 1;
      return this.data.push(elemen);
    } else {
      throw "stack overflow";
    }
  }

  isEmpty() {
    return this.top == -1;
  }

  pop() {
    if (this.isEmpty()) {
      throw "stack underflow";
    } else {
      let poppedValue = this.data.pop();
      this.top -= 1;
      return poppedValue;
    }
  }

  peek() {
    // TODO: answer here
    if (this.isEmpty()) {
      throw "stack is empty";
    } else {
      return this.data[this.top];
    }
  }
};
