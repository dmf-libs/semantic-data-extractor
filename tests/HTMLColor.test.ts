import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct html color", () => {
  expect(recognizer.recognize("#00ccff")).toStrictEqual([
    {
      sanatizedValue: {
        string: "#00ccff"
      },
      type: "html-color",
      value: "#00ccff"
    }
  ]);
  expect(recognizer.recognize("#039", ["html-color" /* datetime */])).toStrictEqual([
    {
      sanatizedValue: {
        string: "#039"
      },
      type: "html-color",
      value: "#039"
    }
  ]);
  expect(recognizer.recognize("ffffcc")).toStrictEqual([
    {
      sanatizedValue: {
        string: "ffffcc"
      },
      type: "html-color",
      value: "ffffcc"
    }
  ]);
});

test("Do not recognize wrong html color", () => {
  expect(recognizer.recognize("blue", ["html-color" /* tld */])).toStrictEqual([]);
  expect(recognizer.recognize("0x000000")).toStrictEqual([]);
  expect(recognizer.recognize("#ff000")).toStrictEqual([]);
});
