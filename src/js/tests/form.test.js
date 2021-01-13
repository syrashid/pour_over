import Form from "../models/Form";

test("base getter and setter methods for Form class", () => {
  let formObj = new Form("Sample Text for a Form", 0, "url_path");

  formObj.cups = 'one';
  formObj.roast = 'dark';
  formObj.soundtrack = 'lofi'

  expect(formObj.cups).toBe("one");
  expect(formObj.roast).toBe("dark");
  expect(formObj.soundtrack).toBe("lofi");


  formObj = null;
});
