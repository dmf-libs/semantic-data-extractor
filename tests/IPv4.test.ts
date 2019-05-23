import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct IPv4", () => {
  expect(recognizer.recognize("217.6.9.89")).toStrictEqual([
    {
      data: { string: "217.6.9.89" },
      type: "IPv4",
      value: "217.6.9.89"
    }
  ]);
  expect(recognizer.recognize("0.0.0.0")).toStrictEqual([
    {
      data: { string: "0.0.0.0" },
      type: "IPv4",
      value: "0.0.0.0"
    }
  ]);
  expect(recognizer.recognize("255.255.255.255")).toStrictEqual([
    {
      data: { string: "255.255.255.255" },
      type: "IPv4",
      value: "255.255.255.255"
    }
  ]);
});

test("Do not recognize wrong IPv4", () => {
  expect(recognizer.recognize("256.0.0.0")).toStrictEqual([]);
  expect(recognizer.recognize("0978.3.3.3")).toStrictEqual([]);
  expect(recognizer.recognize("65.4t.54.3")).toStrictEqual([]);
  expect(recognizer.recognize("65.4t.54.3", ["IPv4"])).toStrictEqual([]);
  expect(recognizer.recognize("127.0.0.1:80", ["IPv4"])).toStrictEqual([]);
});
