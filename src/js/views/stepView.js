// Function Imports
import { initNaturalLanguageForm } from "../functions/initNaturalForm";

// Model Imports
import Form from '../models/Form';
import Timer from "../models/Timer";

export const elements = {
  text: document.querySelector('.step__text'),
  timer: document.querySelector('.step__timer'),
  next: document.querySelector('.step__btn--next'),
  prev: document.querySelector('.step__btn--prev'),
  animation: document.querySelector('.step__animation')
};


export const updateDisplay = command => {
  elements.text.innerHTML = command.text;
  elements.animation.innerHTML = command.animation;

  if (command instanceof Form) {
    elements.animation.innerHTML = command.formHTML();
    initNaturalLanguageForm(command);
  }

  if (command instanceof Timer) {
    clearInterval;
    _timer(command.duration);
  }

  function _timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;

    _displayTimeLeft(Math.round((then - now)/1000));

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }

    _displayTimeLeft(secondsLeft);
    }, 1000);
  }

  function _displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${
      remainderSeconds < 10 ? "0" : ""
    }${remainderSeconds}`;

    document.title = display;
    elements.timer.textContent = display;
  }
}


