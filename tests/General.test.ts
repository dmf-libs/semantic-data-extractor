import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();
test("Do not recognize gibberish", () => {
  expect(recognizer.recognize("asdasjdsaidjasdjoiasjd")).toStrictEqual([]);
});

test("Do not recognize empty", () => {
  expect(recognizer.recognize("   ")).toStrictEqual([]);
});
