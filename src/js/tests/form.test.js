import Form from "../models/Form";

test("base getter and setter methods for Form class", () => {
  let formObj = new Form("Sample Text for a Form", 0, "url_path");

  formObj.cups = 'one';
  formObj.roast = 'dark';
  formObj.soundtrack = 'lofi'

  expect(formObj.cups).toBe("one");
  expect(formObj.roast).toBe("dark");
  expect(formObj.soundtrack).toBe("lofi");
  expect(formObj.tracks).toEqual(["lofi", "acoustic", "folk", "jazz"]);

  formObj = null;
});

test("formHTML for Form class should return a string with a form tag", () => {
  let formObj = new Form("Sample Text for a Form", 0, "url_path");

  expect(formObj.formHTML()).toEqual(expect.stringContaining('<form'));
});
