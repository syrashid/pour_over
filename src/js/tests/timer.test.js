import Timer from "../models/Timer";

test("addTime method for Timer class", () => {
  let timer = new Timer("Sample Text for a Timer", 100, "url_path");

  timer.addTime(100);

  expect(timer.duration).toEqual(200);

  timer = null;
});


