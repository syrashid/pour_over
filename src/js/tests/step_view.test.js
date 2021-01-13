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

test('enablePrev function for stepView module', () => {
  document.body.innerHTML = `
    <div class="navigation-btns flex">
      <button class="sm:text-3xl text-2xl step__btn--prev-disabled bg-violet text-white font-bold py-3 px-4 opacity-50 cursor-not-allowed w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--prev bg-violet hover:opacity-50 text-white font-bold py-3 px-4 hidden w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next bg-purple hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next-disabled bg-purple text-white font-bold py-3 px-4 opacity-50 w-full cursor-not-allowed hidden">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
    </div>
  `;
  elements.next = document.querySelector(".step__btn--next");
  elements.nextDisabled = document.querySelector(".step__btn--next-disabled");
  elements.prev = document.querySelector(".step__btn--prev");
  elements.prevDisabled = document.querySelector(".step__btn--prev-disabled");

  stepView.enablePrev();

  expect(elements.prev.classList.contains('hidden')).toBeFalsy();
  expect(elements.prevDisabled.classList.contains("hidden")).toBeTruthy();
});

test("disablePrev function for stepView module", () => {
  document.body.innerHTML = `
    <div class="navigation-btns flex">
      <button class="sm:text-3xl text-2xl step__btn--prev-disabled bg-violet text-white font-bold py-3 px-4 opacity-50 cursor-not-allowed w-full  hidden">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--prev bg-violet hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next bg-purple hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next-disabled bg-purple text-white font-bold py-3 px-4 opacity-50 w-full cursor-not-allowed hidden">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
    </div>
  `;
  elements.next = document.querySelector(".step__btn--next");
  elements.nextDisabled = document.querySelector(".step__btn--next-disabled");
  elements.prev = document.querySelector(".step__btn--prev");
  elements.prevDisabled = document.querySelector(".step__btn--prev-disabled");

  stepView.disablePrev();

  expect(elements.prev.classList.contains("hidden")).toBeTruthy();
  expect(elements.prevDisabled.classList.contains("hidden")).toBeFalsy();
});

test("enableNext function for stepView module", () => {
  document.body.innerHTML = `
    <div class="navigation-btns flex">
      <button class="sm:text-3xl text-2xl step__btn--prev-disabled bg-violet text-white font-bold py-3 px-4 opacity-50 cursor-not-allowed w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--prev bg-violet hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next bg-purple hover:opacity-50 text-white font-bold py-3 px-4 w-full hidden">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next-disabled bg-purple text-white font-bold py-3 px-4 opacity-50 w-full cursor-not-allowed ">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
    </div>
  `;
  elements.next = document.querySelector(".step__btn--next");
  elements.nextDisabled = document.querySelector(".step__btn--next-disabled");
  elements.prev = document.querySelector(".step__btn--prev");
  elements.prevDisabled = document.querySelector(".step__btn--prev-disabled");

  stepView.enableNext();

  expect(elements.next.classList.contains("hidden")).toBeFalsy();
  expect(elements.nextDisabled.classList.contains("hidden")).toBeTruthy();
});

test("disableNext function for stepView module", () => {
  document.body.innerHTML = `
    <div class="navigation-btns flex">
      <button class="sm:text-3xl text-2xl step__btn--prev-disabled bg-violet text-white font-bold py-3 px-4 opacity-50 cursor-not-allowed w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--prev bg-violet hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        <i class="fas fa-backward"></i> Prev
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next bg-purple hover:opacity-50 text-white font-bold py-3 px-4 w-full">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
      <button class="sm:text-3xl text-2xl step__btn--next-disabled bg-purple text-white font-bold py-3 px-4 opacity-50 w-full cursor-not-allowed hidden">
        Next &nbsp<i class="fas fa-forward"></i>
      </button>
    </div>
  `;
  elements.next = document.querySelector(".step__btn--next");
  elements.nextDisabled = document.querySelector(".step__btn--next-disabled");
  elements.prev = document.querySelector(".step__btn--prev");
  elements.prevDisabled = document.querySelector(".step__btn--prev-disabled");

  stepView.disableNext();

  expect(elements.next.classList.contains("hidden")).toBeTruthy();
  expect(elements.nextDisabled.classList.contains("hidden")).toBeFalsy();
});
