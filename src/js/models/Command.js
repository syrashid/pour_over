// Model Imports
import Step from './Step';

export default class Command extends Step {
  constructor(text, duration, animation_url) {
    super(text, duration, animation_url);
  }

  get viewName() {
    return 'commandView'
  }
}
