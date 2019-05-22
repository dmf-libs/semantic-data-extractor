import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct IPv6", () => {
  expect(recognizer.recognize("FEDC:BA98:7654:3210:FEDC:BA98:7654:3210")).toStrictEqual([
    {
      sanatizedValue: "FEDC:BA98:7654:3210:FEDC:BA98:7654:3210",
      type: "IPv6",
      value: "FEDC:BA98:7654:3210:FEDC:BA98:7654:3210"
    }
  ]);
  expect(recognizer.recognize("1080::8:800:200C:417A")).toStrictEqual([
    {
      sanatizedValue: "1080::8:800:200C:417A",
      type: "IPv6",
      value: "1080::8:800:200C:417A"
    }
  ]);
  expect(recognizer.recognize("::FFFF:129.144.52.38")).toStrictEqual([
    {
      sanatizedValue: "::FFFF:129.144.52.38",
      type: "IPv6",
      value: "::FFFF:129.144.52.38"
    }
  ]);
});

test("Do not recognize wrong IPv6", () => {
  expect(recognizer.recognize("FEDC::7654:3210::BA98:7654:3210")).toStrictEqual([]);
  expect(recognizer.recognize("FEDC:BA98:7654:3210")).toStrictEqual([]);
  expect(recognizer.recognize("::FFFF:129.144.52.38", ["IPv4"])).toStrictEqual([]);
});
