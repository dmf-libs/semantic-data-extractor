import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("10101000", ["binary"])).toStrictEqual([
    {
      data: {
        string: "10101000"
      },
      type: "binary",
      value: "10101000"
    }
  ]);
  expect(recognizer.recognize("01010000", ["binary"])).toStrictEqual([
    {
      data: {
        string: "01010000"
      },
      type: "binary",
      value: "01010000"
    }
  ]);
  expect(recognizer.recognize("100000001", ["binary"])).toStrictEqual([
    {
      data: {
        string: "100000001"
      },
      type: "binary",
      value: "100000001"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("01000200", ["binary"])).toStrictEqual([]);
  expect(recognizer.recognize("00021000", ["binary"])).toStrictEqual([]);
  expect(recognizer.recognize("e10000000", ["binary"])).toStrictEqual([]);
});
