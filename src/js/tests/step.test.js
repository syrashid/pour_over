import Step from '../models/Step';

test('getter methods for Step class', () => {
  let step = new Step("Sample Text for a Step", 10, "www.sample_url.com");

  expect(step.text).toBe("Sample Text for a Step");
  expect(step.duration).toBe(10);
  expect(step.animation).toBe("www.sample_url.com");
  expect(step.prev).toBeNull();
  expect(step.next).toBeNull();
  expect(step.isActive).toBe(false);

  step = null;
});

test('setter methods for Step class', () => {
  let prev = new Step("Previous Step Text", 10, "www.sample_url.com");
  let current = new Step("Current Step Text", 10, "www.sample_url.com");
  let next = new Step("Next Step Text", 10, "www.sample_url.com");

  current.prev = prev;
  current.next = next;

  expect(current.prev).toBe(prev);
  expect(current.next).toBe(next);

  prev = current = next = null;
});

test('activate and terminate methods for Step class', () => {
  let step = new Step("Sample Text for a Step", 10, "www.sample_url.com");

  step.activate();
  expect(step.isActive).toBeTruthy();

  step = null;
})
