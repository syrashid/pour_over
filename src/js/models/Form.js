// Model Imports
import Step from './Step';

export default class Form extends Step {
  constructor(text, duration, animation_url) {
    super(text, duration, animation_url);
  }

  formHTML() {
    return `
      <form onsubmit="return false">
        I'm looking for a

        <span id="atmosphere" class="input-container">
          <span class="placeholder">fancy</span>
          <span class="input selectbox">
            <select class="fancy-select hidden" name="find_desc">
              <option value="fancy">fancy</option>
              <option value="hip">hip</option>
              <option value="romantic">romantic</option>
              <option value="casual">casual</option>
            </select>
          </span>
        </span>
        <span id="cuisine" class="input-container">
          <span class="placeholder">chinese</span>
          <span class="input selectbox">
            <select name="cflt" class="fancy-select hidden">
              <option value="chinese">chinese</option>
              <option value="italian">italian</option>
              <option value="french">french</option>
              <option value="german">german</option>
            </select>
          </span>
        </span>
        restaurant in
        <span id="location" class="input-container no-overflow">
          <span class="input text">
            <input type="text" id="location-input" name="find_loc" value="New York"/>
          </span>
          <span class="placeholder">New York</span>.
        </span>
        <button type="submit">Find a Restaurant</button>
      </form>
    `;
  }
}
