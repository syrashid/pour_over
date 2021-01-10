// Model Imports
import Step from './Step';

export default class Form extends Step {
  constructor(text, duration, animation_url) {
    super(text, duration, animation_url);
  }

  formHTML() {
    return `
      <form onsubmit="return false">
        Let's make
        <span id="number" class="input-container">
          <span class="placeholder"> ___ </span>
          <span class="input selectbox">
            <select class="fancy-select hidden" name="find_desc">
              <option value="one">one</option>
              <option value="two">two</option>
            </select>
          </span>
        </span>
        cup(s) of coffee, we'll use a
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
        <span id="ambience" class="input-container">
          <span class="placeholder"> ??? </span>
          <span class="input selectbox">
            <select name="roast" class="fancy-select hidden">
              <option value="lofi">light</option>
              <option value="acoustic">medium</option>
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
