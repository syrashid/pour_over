import Step from '../models/Step';
import StepController from '../step_controller';
import * as stepView from "../views/stepView";
jest.mock("../views/stepView");

test('push for StepController class', () => {
  let one = new Step("Step One Text", 10, "www.sample_url.com");
  let stepCtrl = new StepController();

  stepCtrl.push(one);

  expect(stepCtrl.length).toBe(1);
  expect(stepCtrl.head).toBe(one);
  expect(stepCtrl.tail).toBe(one);

  one = stepCtrl = null;
});

test('head & tail getter for  StepController class', () => {
  let head = new Step("Step Head Text", 10, "www.sample_url.com");
  let middle = new Step("Step Middle Text", 10, "www.sample_url.com");
  let tail = new Step("Step Tail Text", 10, "www.sample_url.com");
  let stepCtrl = new StepController();

  stepCtrl.push(head);
  stepCtrl.push(middle);
  stepCtrl.push(tail);

  expect(stepCtrl.head).toBe(head);
  expect(stepCtrl.tail).toBe(tail);

  head = middle = tail = stepCtrl = null;
});

test('length getter for StepController class', () => {
  let one = new Step("Step One Text", 10, "www.sample_url.com");
  let two = new Step("Step Two Text", 10, "www.sample_url.com");
  let three = new Step("Step Three Text", 10, "www.sample_url.com");
  let stepCtrl = new StepController();

  stepCtrl.push(one);
  stepCtrl.push(two);
  stepCtrl.push(three);

  expect(stepCtrl.length).toBe(3);

  one = two = three = stepCtrl = null;
});

test('start method for StepController class', () => {
  let one = new Step("Step One Text", 10, "www.sample_url.com");
  let stepCtrl = new StepController();

  stepCtrl.push(one);
  stepCtrl.start();

  expect(stepView.updateDisplay).toBeCalled();

  one = stepCtrl = null;
});
