import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct TLD", () => {
  expect(recognizer.recognize("bg", ["tld"])).toStrictEqual([
    {
      sanatizedValue: "bg",
      type: "tld",
      value: "bg"
    }
  ]);
  expect(recognizer.recognize("com", ["tld"])).toStrictEqual([
    {
      sanatizedValue: "com",
      type: "tld",
      value: "com"
    }
  ]);
  expect(recognizer.recognize("website", ["tld"])).toStrictEqual([
    {
      sanatizedValue: "website",
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
