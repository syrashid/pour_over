export default class Step {
  constructor(text, duration, animation_url) {
    this._text = text;
    this._duration = duration;
    this._prev = null;
    this._next = null;
    this._animation_url = animation_url;
    this._active = false;
  }

  get text() {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  get duration() {
    return this._duration;
  }

  get prev() {
    return this._prev;
  }

  set prev(prev) {
    this._prev = prev;
  }

  get next() {
    return this._next;
  }

  set next(next) {
    this._next = next;
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


