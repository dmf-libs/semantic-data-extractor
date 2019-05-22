import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct VAT", () => {
  expect(recognizer.recognize("RO4594917")).toStrictEqual([
    {
      sanatizedValue: {
        string: "RO4594917"
      },
      type: "vat",
      value: "RO4594917"
    }
  ]);
});

test("Do not recognize invalid VAT", () => {
  expect(recognizer.recognize("RO4594918", ["vat"])).toStrictEqual([]);
});
