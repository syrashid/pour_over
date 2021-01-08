export default class Step {
    constructor(text, duration, prev, next, animation_url, active) {
      this._text = text;
      this._duration = duration;
      this._prev = prev;
      this._next = next;
      this._animation_url = animation_url;
      this._active = active;
    }
}
