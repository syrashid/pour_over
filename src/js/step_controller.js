// Model Imports
import Step from './models/Step';

// View Imports
import * as formView from './views/formView';
import * as commandView from './views/commandView';

export default class StepController {
  constructor() {
    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  get length() {
    return this._length;
  }

  get head() {
    return this._head;
  }

  get tail() {
    return this._tail;
  }

  push(step) {
    if (!this._head) {
      this._head = step;
      this._tail = step;
    } else {
      this._tail.next = step;
      step.prev = this._tail;
      this._tail = step;
    }
    this._length++;
    return this;
  }

  start() {
    commandView.updateDisplay(this._head);
  }
}
