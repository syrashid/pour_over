// Model Imports
import Step from './Step';

export default class Timer extends Step {
  constructor(text, duration, animation_url) {
    super(text, duration, animation_url);
  }

  addTime(seconds) {
    this._duration += seconds;
  }
}
