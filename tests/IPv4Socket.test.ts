import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct IPv4 Socket", () => {
  expect(recognizer.recognize("127.0.0.1:80", ["IPv4-socket"])).toStrictEqual([
    {
      sanatizedValue: "127.0.0.1:80",
      type: "IPv4-socket",
      value: "127.0.0.1:80"
    }
  ]);
  expect(recognizer.recognize("255.255.255.0:21", ["IPv4-socket"])).toStrictEqual([
    {
      sanatizedValue: "255.255.255.0:21",
      type: "IPv4-socket",
      value: "255.255.255.0:21"
    }
  ]);
  expect(recognizer.recognize("1.0.0.0:1", ["IPv4-socket"])).toStrictEqual([
    {
      sanatizedValue: "1.0.0.0:1",
      type: "IPv4-socket",
      value: "1.0.0.0:1"
    }
  ]);
});

test("Do not recognize wrong IPv4 Socket", () => {
  expect(recognizer.recognize("0.0.0.0:1", ["IPv4-socket"])).toStrictEqual([]);
  expect(recognizer.recognize("256.1.1.1:20", ["IPv4-socket"])).toStrictEqual([]);
  expect(recognizer.recognize("127.0.0.1:65536", ["IPv4-socket"])).toStrictEqual([]);
});
