import { elements } from './base';

export const updateDisplay = command => {
  elements.text.innerHTML = command.text;
}
