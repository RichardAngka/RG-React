// Dari inisiasi stack dengan jumlah maksimal elemen 10, cobalah implementasikan operasi push.

module.exports = class Stack {
  constructor() {
    // TODO: answer here
    this.data = [];
    this.top = -1;
    this.size = 10;
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
};
