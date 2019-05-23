import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Correctly recognizes example URL", () => {
  expect(recognizer.recognize("http://google.com")).toStrictEqual([
    {
      type: "url",
      value: "http://google.com",
      data: new URL("http://google.com")
    }
  ]);
});
