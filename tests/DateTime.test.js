import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize date", () => {
  expect(recognizer.recognize("2019-10-04")).toStrictEqual([
    {
      sanatizedValue: "Fri Oct 04 2019 03:00:00 GMT+0300",
      type: "datetime",
      value: "2019-10-04"
    }
  ]);
});

test("Do not recognize integers as dates", () => {
  const result = recognizer
    .recognize("12312312")
    .filter(r => r.type === "datetime");
  expect(result).toHaveLength(0);
});
