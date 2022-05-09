module.exports = class TextEditor {
  constructor() {
    // TODO: answer here
    this.undoStack = [];
    this.redoStack = [];
  }

  write(c) {
    // TODO: answer here
    this.undoStack.push(c);
    return this.undoStack;
  }

  read() {
    if (this.undoStack.length === 0) {
      return "";
    }
    return this.undoStack.join("");
  }

  undo() {
    if (this.undoStack.length === 0) {
      return 0;
    }
    return this.redoStack.push(this.undoStack.pop());
  }

  redo() {
    if (this.redoStack.length === 0) {
      return 0;
    }
    return this.undoStack.push(this.redoStack.pop());
  }
};
