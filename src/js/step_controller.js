

// Model Imports
import Step from './models/Step';

// View Import
import * as stepView from './views/stepView';

export default class StepController {
  constructor() {
    this._head = null;
    this._active = null;
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
    stepView.updateDisplay(this._head);
    this._active = this._head;
  }

  nextStep() {
    // Add some guards for beginning and end of sequence
    this._active = this._active.next;
    stepView.updateDisplay(this._active);
  }

  prevStep() {
    this._active = this._active.prev;
    stepView.updateDisplay(this._active);
  }
}
