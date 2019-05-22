import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct email", () => {
  expect(recognizer.recognize("he_llo@worl.d.com")).toStrictEqual([
    {
      sanatizedValue: "he_llo@worl.d.com",
      type: "email",
      value: "he_llo@worl.d.com"
    }
  ]);
  expect(recognizer.recognize("hel.l-o@wor-ld.museum")).toStrictEqual([
    {
      sanatizedValue: "hel.l-o@wor-ld.museum",
      type: "email",
      value: "hel.l-o@wor-ld.museum"
    }
  ]);
  expect(recognizer.recognize("h1ello@123.com")).toStrictEqual([
    {
      sanatizedValue: "h1ello@123.com",
      type: "email",
      value: "h1ello@123.com"
    }
  ]);
});

test("Do not recognize wrong email", () => {
  expect(recognizer.recognize("hello@worl_d.com")).toStrictEqual([]);
  expect(recognizer.recognize("he&amp;llo@world.co1")).toStrictEqual([]);
  expect(recognizer.recognize(".hello@wor#.co.uk")).toStrictEqual([]);
});
