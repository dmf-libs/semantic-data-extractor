import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("A")).toStrictEqual([
    {
      data: { string: "A" },
      type: "musical-chord",
      value: "A"
    }
  ]);
  expect(recognizer.recognize("Ab7#9b5")).toStrictEqual([
    {
      data: { string: "Ab7#9b5" },
      type: "musical-chord",
      value: "Ab7#9b5"
    }
  ]);
  //TODO: Fix for G#6/9
  //   expect(recognizer.recognize("G#6/9", ["blood-group"])).toStrictEqual([
  //     {
  //       data: { string: "G#6/9" },
  //       type: "musical-chord",
  //       value: "G#6/9"
  //     }
  //   ]);
  expect(recognizer.recognize("C#sus2sus4")).toStrictEqual([
    {
      data: { string: "C#sus2sus4" },
      type: "musical-chord",
      value: "C#sus2sus4"
    }
  ]);
  //TODO: Fix for C6+G
  //   expect(recognizer.recognize("C6+G")).toStrictEqual([
  //     {
  //       data: { string: "C6+G" },
  //       type: "musical-chord",
  //       value: "C6+G"
  //     }
  //   ]);
  expect(recognizer.recognize("Cm/G")).toStrictEqual([
    {
      data: { string: "Cm/G" },
      type: "musical-chord",
      value: "Cm/G"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("Dm/9", ["musical-chord"])).toStrictEqual([]);
  expect(recognizer.recognize("Aadd9aug13m6")).toStrictEqual([]);
  expect(recognizer.recognize("min")).toStrictEqual([]);
  expect(recognizer.recognize("Abs")).toStrictEqual([]);
});
