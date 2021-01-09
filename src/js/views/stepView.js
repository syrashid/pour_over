export const elements = {
  text: document.querySelector('.step__text'),
  timer: document.querySelector('.step__text'),
  next: document.querySelector('.step__btn--next'),
  prev: document.querySelector('.step__btn--prev')
};


export const updateDisplay = command => {
  elements.text.innerHTML = command.text;
}


