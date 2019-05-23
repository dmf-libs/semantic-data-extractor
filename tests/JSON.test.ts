import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct json string", () => {
  expect(recognizer.recognize('{"test":1, "deep": {"v": [1,2,3]}}')).toStrictEqual([
    {
      data: {
        string: '{"test":1, "deep": {"v": [1,2,3]}}',
        json: {
          test: 1,
          deep: {
            v: [1, 2, 3]
          }
        }
      },
      type: "json",
      value: '{"test":1, "deep": {"v": [1,2,3]}}'
    }
  ]);
  expect(recognizer.recognize("[1,4,42,2]")).toStrictEqual([
    {
      data: {
        string: "[1,4,42,2]",
        json: [1, 4, 42, 2]
      },
      type: "json",
      value: "[1,4,42,2]"
    }
  ]);
});

test("Do not recognize invalid json string", () => {
  expect(recognizer.recognize("[1,4,42,2", ["json"])).toStrictEqual([]);
  expect(recognizer.recognize('{"test:1}', ["json"])).toStrictEqual([]);
});
