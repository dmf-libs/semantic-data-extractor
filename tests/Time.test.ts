import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("12:15")).toStrictEqual([
    {
      sanatizedValue: {
        string: "12:15"
      },
      type: "time",
      value: "12:15"
    }
  ]);
  expect(recognizer.recognize("10:26:59")).toStrictEqual([
    {
      sanatizedValue: {
        string: "10:26:59"
      },
      type: "time",
      value: "10:26:59"
    }
  ]);
  expect(recognizer.recognize("22:01:15")).toStrictEqual([
    {
      sanatizedValue: {
        string: "22:01:15"
      },
      type: "time",
      value: "22:01:15"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("24:10:25")).toStrictEqual([]);
  expect(recognizer.recognize("13:2:60", ["time"])).toStrictEqual([]);
});
