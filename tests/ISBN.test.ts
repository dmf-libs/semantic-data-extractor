import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct ISBN number", () => {
  expect(recognizer.recognize("ISBN 0 93028 923 4")).toStrictEqual([
    {
      data: {
        string: "ISBN 0 93028 923 4"
      },
      type: "isbn",
      value: "ISBN 0 93028 923 4"
    }
  ]);
  expect(recognizer.recognize("ISBN 1-56389-668-0")).toStrictEqual([
    {
      data: {
        string: "ISBN 1-56389-668-0"
      },
      type: "isbn",
      value: "ISBN 1-56389-668-0"
    }
  ]);
  expect(recognizer.recognize("ISBN 1-56389-016-X")).toStrictEqual([
    {
      data: {
        string: "ISBN 1-56389-016-X"
      },
      type: "isbn",
      value: "ISBN 1-56389-016-X"
    }
  ]);
});

test("Do not recognize wrong ISBN number", () => {
  expect(recognizer.recognize("123456789X")).toStrictEqual([]);
  expect(recognizer.recognize("ISBN 9-87654321-2")).toStrictEqual([]);
  expect(recognizer.recognize("ISBN 123 456-789X")).toStrictEqual([]);
});
