import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct cidr string", () => {
  expect(recognizer.recognize("192.168.100.1/24")).toStrictEqual([
    {
      sanatizedValue: {
        string: "192.168.100.1/24"
      },
      type: "cidr",
      value: "192.168.100.1/24"
    }
  ]);
  expect(recognizer.recognize("0.0.0.0/0")).toStrictEqual([
    {
      sanatizedValue: {
        string: "0.0.0.0/0"
      },
      type: "cidr",
      value: "0.0.0.0/0"
    }
  ]);
});

test("Do not recognize invalid cidr string", () => {
  expect(recognizer.recognize("192.168.100.1/33")).toStrictEqual([]);
  expect(recognizer.recognize("0.0.0.0/90")).toStrictEqual([]);
});
