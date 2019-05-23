import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();
test("Correctly recognizes the string true", () => {
  expect(recognizer.recognize("true")).toStrictEqual([
    {
      type: "boolean",
      value: "true",
      data: { bool: true }
    }
  ]);
});

test("Correctly recognizes the string false", () => {
  expect(recognizer.recognize("false")).toStrictEqual([
    {
      type: "boolean",
      value: "false",
      data: { bool: false }
    }
  ]);
});

test("Correctly recognizes the case insensitive string - false", () => {
  expect(recognizer.recognize("fAlSe")).toStrictEqual([
    {
      type: "boolean",
      value: "fAlSe",
      data: { bool: false }
    }
  ]);
});

test("Correctly recognizes the case insensitive string - true", () => {
  expect(recognizer.recognize("tRuE")).toStrictEqual([
    {
      type: "boolean",
      value: "tRuE",
      data: { bool: true }
    }
  ]);
});

test("Correctly recognizes the Yes as true", () => {
  expect(recognizer.recognize("Yes", ["boolean"])).toStrictEqual([
    {
      type: "boolean",
      value: "Yes",
      data: { bool: true }
    }
  ]);
});

test("Correctly recognizes the No as false", () => {
  expect(recognizer.recognize("No", ["boolean"])).toStrictEqual([
    {
      type: "boolean",
      value: "No",
      data: { bool: false }
    }
  ]);
});

test("Correctly recognizes the 1 as true and integer", () => {
  expect(recognizer.recognize("1", ["boolean"])).toStrictEqual([
    {
      type: "boolean",
      value: "1",
      data: { bool: true }
    }
  ]);
});

test("Correctly recognizes the 0 as false and integer", () => {
  expect(recognizer.recognize("0", ["boolean"])).toStrictEqual([
    {
      type: "boolean",
      value: "0",
      data: { bool: false }
    }
  ]);
});

test("Correctly recognizes the `  false ` with spaces arount - test trig", () => {
  expect(recognizer.recognize("  false ")).toStrictEqual([
    {
      type: "boolean",
      value: "false",
      data: { bool: false }
    }
  ]);
});
