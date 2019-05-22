import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize date", () => {
  expect(recognizer.recognize("2019-10-04")).toStrictEqual([
    {
      sanatizedValue: 1570147200,
      type: "datetime",
      value: "2019-10-04"
    }
  ]);
});

test("Do not recognize integers as dates", () => {
  const result = recognizer.recognize("12312312");
  expect(result.filter(r => r.type === "datetime")).toHaveLength(0);
});
