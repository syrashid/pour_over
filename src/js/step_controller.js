// Model Imports
import Step from './models/Step';

// View Imports
import * as formView from './views/formView';

export default class StepController {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  push(step) {
    if (!this.head) {
      this.head = step;
      this.tail = step;
    } else {
      this.tail.next = step;
      step.prev = this.tail;
      this.tail = step;
    }
    this.length++;
    return this;
  }

  start() {
    console.log("Hello World")
  }
}
