import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct TLD", () => {
  expect(recognizer.recognize("bg", ["tld"])).toStrictEqual([
    {
      data: { string: "bg" },
      type: "tld",
      value: "bg"
    }
  ]);
  expect(recognizer.recognize("coM", ["tld"])).toStrictEqual([
    {
      data: { string: "com" },
      type: "tld",
      value: "coM"
    }
  ]);
  expect(recognizer.recognize("website", ["tld"])).toStrictEqual([
    {
      data: { string: "website" },
      type: "tld",
      value: "website"
    }
  ]);
});

test("Do not recognize wrong TLD", () => {
  expect(recognizer.recognize("nonexistant", ["tld"])).toStrictEqual([]);
  expect(recognizer.recognize("qq", ["tld"])).toStrictEqual([]);
  expect(recognizer.recognize("hh", ["tld"])).toStrictEqual([]);
});
