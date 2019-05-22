import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("1a79a4d60de6718e8e5b326e338ae533", ["md5"])).toStrictEqual([
    {
      sanatizedValue: {
        string: "1a79a4d60de6718e8e5b326e338ae533"
      },
      type: "md5",
      value: "1a79a4d60de6718e8e5b326e338ae533"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("1a79a4d60de6718e8e5b326e311111", ["md5"])).toStrictEqual([]);
  expect(recognizer.recognize("1a79a4d60", ["md5"])).toStrictEqual([]);
});
