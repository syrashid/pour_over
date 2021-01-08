import Step from '../models/Step';

test('all getter methods for Step class', () => {
  let step = new Step("Sample Text for a Step", 10, "www.sample_url.com");

  expect(step.text).toBe("Sample Text for a Step")

  step = null;
});
