import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct percentage string", () => {
  expect(recognizer.recognize("100%", ["percentage"])).toStrictEqual([
    {
      sanatizedValue: {
        percentage: 100,
        string: "100%"
      },
      type: "percentage",
      value: "100%"
    }
  ]);
  expect(recognizer.recognize("100", ["percentage"])).toStrictEqual([
    {
      sanatizedValue: {
        percentage: 100,
        string: "100"
      },
      type: "percentage",
      value: "100"
    }
  ]);
  expect(recognizer.recognize("52.65%")).toStrictEqual([
    {
      sanatizedValue: {
        percentage: 52.65,
        string: "52.65%"
      },
      type: "percentage",
      value: "52.65%"
    }
  ]);
});

test("Do not recognize wrong percentage string", () => {
  expect(recognizer.recognize("-1", ["percentage"])).toStrictEqual([]);
  expect(recognizer.recognize("-1%", ["percentage"])).toStrictEqual([]);
  expect(recognizer.recognize("100.1%", ["percentage"])).toStrictEqual([]);
});
