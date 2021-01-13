import Step from '../models/Step';
import * as stepView from '../views/stepView';
import { elements } from '../views/stepView';


test('updateDisplay function for Step models', () => {
  let changeStep = new Step("Text to prove step change", 10, "www.sample_url.com");
  document.body.innerHTML =
    '<div class="step__text-container flex justify-center mb-12">' +
    '  <h1 class="text-7xl text-center step__text">' +
    "    This is a sample text for a step" +
    "  </h1>" +
    "</div>" +
    '<div class="step__animation"></div>' +
    ' <div class="step__timer-container flex justify-center">' +
    '    <h3 class="text-5xl text-center step__timer bg-red text-white w-full py-3 px-4 border-b-8 border-white hidden"></h3> ' +
    '</div>';
  elements.text = document.querySelector('.step__text');
  elements.timer = document.querySelector('.step__timer');
  elements.animation = document.querySelector(".step__animation");

  stepView.updateDisplay(changeStep);

  expect(elements.text.innerHTML).toBe("Text to prove step change");

  changeStep = null;
})
