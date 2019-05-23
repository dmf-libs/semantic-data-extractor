import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct email", () => {
  expect(recognizer.recognize("he_llo@worl.d.com")).toStrictEqual([
    {
      data: { string: "he_llo@worl.d.com" },
      type: "email",
      value: "he_llo@worl.d.com"
    }
  ]);
  expect(recognizer.recognize("hel.l-o@wor-ld.museum")).toStrictEqual([
    {
      data: { string: "hel.l-o@wor-ld.museum" },
      type: "email",
      value: "hel.l-o@wor-ld.museum"
    }
  ]);
  expect(recognizer.recognize("h1ello@123.com")).toStrictEqual([
    {
      data: { string: "h1ello@123.com" },
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
