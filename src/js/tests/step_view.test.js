import Step from '../models/Step';
import * as stepView from '../views/stepView';
import { elements } from '../views/stepView';


test('updateDisplay function for Step models', () => {
  let changeStep = new Step("Text to prove step change", 10, "www.sample_url.com");
  document.body.innerHTML =
  '<div class="step__text-container flex justify-center mb-12">' +
  '  <h1 class="text-7xl text-center step__text">' +
  '    This is a sample text for a step' +
  '  </h1>' +
  '</div>';
  elements.text = document.querySelector('.step__text');

  stepView.updateDisplay(changeStep);

  expect(elements.text.innerHTML).toBe("Text to prove step change");

  changeStep = null;
})
