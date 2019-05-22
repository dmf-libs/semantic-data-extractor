import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Correctly recognizes the `  false ` with spaces arount - test trig", () => {
  expect(recognizer.recognize("http://google.com")).toStrictEqual([
    {
      type: "url",
      value: "http://google.com",
      sanatizedValue: new URL("http://google.com")
    }
  ]);
});
