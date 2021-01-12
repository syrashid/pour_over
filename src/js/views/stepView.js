// Function Imports
import { initNaturalLanguageForm } from "../functions/initNaturalForm";

// Model Imports
import Form from '../models/Form';
import Timer from "../models/Timer";

export const elements = {
  text: document.querySelector(".step__text"),
  timer: document.querySelector(".step__timer"),
  next: document.querySelector(".step__btn--next"),
  nextDisabled: document.querySelector(".step__btn--next-disabled"),
  prev: document.querySelector(".step__btn--prev"),
  prevDisabled: document.querySelector(".step__btn--prev-disabled"),
  animation: document.querySelector(".step__animation"),
};


export const updateDisplay = (command, intervals = null) => {
  elements.text.innerHTML = command.text;
  elements.timer.classList.add('hidden');
  elements.animation.innerHTML = command.animation;
  document.title = ` ❤️ Pour Over ❤️ `;


  if (command instanceof Form) {
    elements.animation.innerHTML = command.formHTML();
    initNaturalLanguageForm(command);
  }

  if (command instanceof Timer) {
    elements.timer.classList.remove("hidden");
    timer(command.duration);
  }

  function timer(seconds) {
    let countdown;
    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(Math.round((then - now)/1000));
    clearInterval(countdown);
    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        // add an audio sound for this
        clearInterval(countdown);
        elements.next.click();
        return;
      }

    displayTimeLeft(secondsLeft);
    }, 1000);

    intervals.push(countdown);
  }

  function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;

    document.title = ` ❤️ ${display} ❤️ `;
    elements.timer.textContent = display;
  }
}

export const enablePrev = () => {
  elements.prev.classList.remove("hidden");
  elements.prevDisabled.classList.add("hidden");
};

export const disablePrev = () => {
  elements.prev.classList.add("hidden");
  elements.prevDisabled.classList.remove("hidden");
};

export const enableNext = () => {
  elements.next.classList.remove("hidden");
  elements.nextDisabled.classList.add("hidden");
};

export const disableNext = () => {
  elements.next.classList.add("hidden");
  elements.nextDisabled.classList.remove("hidden");
};
