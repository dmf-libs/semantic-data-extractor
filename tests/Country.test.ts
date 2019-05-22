import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct Country", () => {
  expect(recognizer.recognize("bUlgarIa")).toStrictEqual([
    {
      sanatizedValue: { name: "Bulgaria", code: "BG" },
      type: "country",
      value: "bUlgarIa"
    }
  ]);
  expect(recognizer.recognize("USA")).toStrictEqual([
    {
      sanatizedValue: { name: "USA", code: "US" },
      type: "country",
      value: "USA"
    }
  ]);
  expect(recognizer.recognize("Greece")).toStrictEqual([
    {
      sanatizedValue: { name: "Greece", code: "GR" },
      type: "country",
      value: "Greece"
    }
  ]);
});

test("Do not recognize missing country", () => {
  expect(recognizer.recognize("nonexistantCountry")).toStrictEqual([]);
});
