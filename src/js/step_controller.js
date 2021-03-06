

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
    this._timerIntervals = [];
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
    if (this._active === this._head) stepView.enablePrev();
    this._active = this._active.next;
    if (this._active === this._tail) stepView.disableNext();
    this._clearIntervals();
    stepView.updateDisplay(this._active, this._timerIntervals);
  }

  prevStep() {
    if (this._active === this._tail) stepView.enableNext();
    this._active = this._active.prev;
    if (this._active === this._head) stepView.disablePrev();
    this._clearIntervals();
    stepView.updateDisplay(this._active, this._timerIntervals);
  }

  _clearIntervals() {
    this._timerIntervals.forEach(clearInterval);
  }
}
