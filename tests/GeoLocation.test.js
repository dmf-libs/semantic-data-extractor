import Recognizer from "./../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(recognizer.recognize("+90.0, -127.554334")).toStrictEqual([
    {
      sanatizedValue: {
        lat: 90,
        lon: -127.554334,
        string: "+90.0, -127.554334"
      },
      type: "geo-location",
      value: "+90.0, -127.554334"
    }
  ]);
  expect(recognizer.recognize("45, 180")).toStrictEqual([
    {
      sanatizedValue: {
        lat: 45,
        lon: 180,
        string: "45, 180"
      },
      type: "geo-location",
      value: "45, 180"
    }
  ]);
  expect(recognizer.recognize("-90, -180")).toStrictEqual([
    {
      sanatizedValue: {
        lat: -90,
        lon: -180,
        string: "-90, -180"
      },
      type: "geo-location",
      value: "-90, -180"
    }
  ]);
  expect(recognizer.recognize("+90, +180")).toStrictEqual([
    {
      sanatizedValue: {
        lat: 90,
        lon: 180,
        string: "+90, +180"
      },
      type: "geo-location",
      value: "+90, +180"
    }
  ]);
  expect(recognizer.recognize("-90.000, -180.0000")).toStrictEqual([
    {
      sanatizedValue: {
        lat: -90,
        lon: -180,
        string: "-90.000, -180.0000"
      },
      type: "geo-location",
      value: "-90.000, -180.0000"
    }
  ]);
  expect(recognizer.recognize("47.1231231, 179.99999999")).toStrictEqual([
    {
      sanatizedValue: {
        lat: 47.1231231,
        lon: 179.99999999,
        string: "47.1231231, 179.99999999"
      },
      type: "geo-location",
      value: "47.1231231, 179.99999999"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("-90., -180.")).toStrictEqual([]);
  expect(recognizer.recognize("+90.1, -100.111")).toStrictEqual([]);
  expect(recognizer.recognize("-91, 123.456")).toStrictEqual([]);
  expect(recognizer.recognize("045, 180")).toStrictEqual([]);
});
