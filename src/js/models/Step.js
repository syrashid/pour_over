export default class Step {
  constructor(text, duration, prev, next, animation_url, active) {
    this._text = text;
    this._duration = duration;
    this._prev = prev;
    this._next = next;
    this._animation_url = animation_url;
    this._active = active;
  }

  get text() {
    return this._text;
  }

  get duration() {
    return this._duration;
  }

  get prevStep() {
    return this._prev;
  }

  get nextStep() {
    return this._next;
  }

  get animation() {
    return this._animation_url;
  }

  get isActive() {
    return this._active;
  }

  activate() {
    this._active = true;
  }

  terminate() {
    this._active = false;
  }
}
