// Model Imports
import Step from './Step';

export default class Form extends Step {
  constructor(text, duration, animation_url) {
    super(text, duration, animation_url);
    this._cups = null;
    this._roast = null;
    this._soundtrack = null;
  }

  get cups() {
    return this._cups;
  }

  set cups(cups) {
    this._cups = cups;
    if (cups === 'two') {
      this._next._next._next._next.addTime(60);
    }
  }

  get roast() {
    return this._roast;
  }

  set roast(roast) {
    this._roast = roast;
    if (roast === "medium") {
      this._next._next._next._next.addTime(30);
    } else if (roast === "light") {
      this._next._next._next._next.addTime(60);
    }
  }

  get soundtrack() {
    return this._soundtrack;
  }

  set soundtrack(soundtrack) {
    if (this._soundtrack instanceof Audio) this._soundtrack.pause();
    this._soundtrack = new Audio(`../../assets/${soundtrack}.mp3`);
    this._soundtrack.play();
  }

  formHTML() {
    return `
    <form onsubmit="return false">
    Let's make
    <span id="cups" class="input-container">
    <span class="placeholder"> ??? </span>
    <span class="input selectbox">
    <select class="fancy-select hidden" name="cups">
    <option value="one">one</option>
    <option value="two">two</option>
    </select>
    </span>
    </span>
    cup(s) of coffee, using a
    <span id="roast" class="input-container">
    <span class="placeholder"> ??? </span>
    <span class="input selectbox">
    <select name="roast" class="fancy-select hidden">
    <option value="light">light</option>
    <option value="medium">medium</option>
    <option value="dark">dark</option>
    </select>
    </span>
    </span>
    roast, with a
    <span id="soundtrack" class="input-container">
    <span class="placeholder"> ??? </span>
    <span class="input selectbox">
    <select name="soundtrack" class="fancy-select hidden">
    <option value="lofi">lofi</option>
    <option value="acoustic">acoustic</option>
    <option value="folk">folk</option>
    <option value="jazz">jazz</option>
    </select>
    </span>
    </span>
    soundtrack.
    </form>
    `;
  }
}
