// Function Imports
import { initNaturalLanguageForm } from "../functions/initNaturalForm";

// Model Imports
import Form from '../models/Form';

export const elements = {
  text: document.querySelector('.step__text'),
  timer: document.querySelector('.step__text'),
  next: document.querySelector('.step__btn--next'),
  prev: document.querySelector('.step__btn--prev'),
  animation: document.querySelector('.step__animation')
};


export const updateDisplay = command => {
  elements.text.innerHTML = command.text;
  if (command instanceof Form) {
    elements.animation.innerHTML = command.formHTML();
    initNaturalLanguageForm();
  }
}


