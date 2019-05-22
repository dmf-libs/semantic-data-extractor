import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("6011-1111-1111-1111")).toStrictEqual([
    {
      sanatizedValue: {
        string: "6011-1111-1111-1111"
      },
      type: "credit-card",
      value: "6011-1111-1111-1111"
    }
  ]);
  expect(recognizer.recognize("5423-1111-1111-1111")).toStrictEqual([
    {
      sanatizedValue: {
        string: "5423-1111-1111-1111"
      },
      type: "credit-card",
      value: "5423-1111-1111-1111"
    }
  ]);
  expect(recognizer.recognize("341111111111111", ["credit-card"])).toStrictEqual([
    {
      sanatizedValue: {
        string: "341111111111111"
      },
      type: "credit-card",
      value: "341111111111111"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("4111-111-111-111")).toStrictEqual([]);
  expect(recognizer.recognize("3411-1111-1111-111")).toStrictEqual([]);
  expect(recognizer.recognize("Visa")).toStrictEqual([]);
});
