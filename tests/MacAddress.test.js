import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize currect Mac Addresses", () => {
  expect(recognizer.recognize("01:23:45:67:89:ab")).toStrictEqual([
    {
      sanatizedValue: '01:23:45:67:89:ab',
      type: "mac-address",
      value: '01:23:45:67:89:ab'
    }
  ]);
  expect(recognizer.recognize("01:23:45:67:89:AB")).toStrictEqual([
    {
      sanatizedValue: '01:23:45:67:89:AB',
      type: "mac-address",
      value: '01:23:45:67:89:AB'
    }
  ]);
  expect(recognizer.recognize("fE:dC:bA:98:76:54")).toStrictEqual([
    {
      sanatizedValue: 'fE:dC:bA:98:76:54',
      type: "mac-address",
      value: 'fE:dC:bA:98:76:54'
    }
  ]);
});

test("Do not recognize wrong Mac Address", () => {
    // too long
    expect(recognizer.recognize("01:23:45:67:89:ab:cd")).toStrictEqual([]);
    // invalid chars
    expect(recognizer.recognize("01:23:45:67:89:Az")).toStrictEqual([]);
    // too short
    expect(recognizer.recognize("01:23:45:56:")).toStrictEqual([]);
  });
