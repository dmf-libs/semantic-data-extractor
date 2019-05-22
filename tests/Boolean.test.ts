import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();
test("Correctly recognizes the string true", () => {
  expect(recognizer.recognize("true")).toStrictEqual([
    {
      type: "boolean",
      value: "true",
      sanatizedValue: true
    }
  ]);
});

test("Correctly recognizes the string false", () => {
  expect(recognizer.recognize("false")).toStrictEqual([
    {
      type: "boolean",
      value: "false",
      sanatizedValue: false
    }
  ]);
});

test("Correctly recognizes the case insensitive string - false", () => {
  expect(recognizer.recognize("fAlSe")).toStrictEqual([
    {
      type: "boolean",
      value: "fAlSe",
      sanatizedValue: false
    }
  ]);
});

test("Correctly recognizes the case insensitive string - true", () => {
  expect(recognizer.recognize("tRuE")).toStrictEqual([
    {
      type: "boolean",
      value: "tRuE",
      sanatizedValue: true
    }
  ]);
});

test("Correctly recognizes the Yes as true", () => {
  expect(recognizer.recognize("Yes")).toStrictEqual([
    {
      type: "boolean",
      value: "Yes",
      sanatizedValue: true
    }
  ]);
});

test("Correctly recognizes the No as false", () => {
  expect(recognizer.recognize("No")).toStrictEqual([
    {
      type: "boolean",
      value: "No",
      sanatizedValue: false
    }
  ]);
});

test("Correctly recognizes the 1 as true and integer", () => {
  expect(recognizer.recognize("1")).toStrictEqual([
    {
      type: "boolean",
      value: "1",
      sanatizedValue: true
    },
    {
      sanatizedValue: 1,
      type: "integer",
      value: "1"
    }
  ]);
});

test("Correctly recognizes the 0 as false and integer", () => {
  expect(recognizer.recognize("0")).toStrictEqual([
    {
      type: "boolean",
      value: "0",
      sanatizedValue: false
    },
    {
      sanatizedValue: 0,
      type: "integer",
      value: "0"
    }
  ]);
});

test("Correctly recognizes the `  false ` with spaces arount - test trig", () => {
  expect(recognizer.recognize("  false ")).toStrictEqual([
    {
      type: "boolean",
      value: "false",
      sanatizedValue: false
    }
  ]);
});
