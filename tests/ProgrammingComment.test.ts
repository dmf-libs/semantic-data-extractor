import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct programming comment", () => {
  expect(recognizer.recognize("/* This is a multi-line comment */")).toStrictEqual([
    {
      data: {
        string: "/* This is a multi-line comment */"
      },
      type: "programming-comment",
      value: "/* This is a multi-line comment */"
    }
  ]);
  expect(recognizer.recognize("// this is a single-line")).toStrictEqual([
    {
      data: {
        string: "// this is a single-line"
      },
      type: "programming-comment",
      value: "// this is a single-line"
    }
  ]);
});

test("Do not recognize invalid programming comment", () => {
  expect(recognizer.recognize("/sometext")).toStrictEqual([]);
  expect(recognizer.recognize("/*/")).toStrictEqual([]);
  expect(recognizer.recognize("http://google.com", ["programming-comment"])).toStrictEqual([]);
  expect(recognizer.recognize("e10000000")).toStrictEqual([]);
});
