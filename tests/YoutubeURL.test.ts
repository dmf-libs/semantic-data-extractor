import Recognizer from "../src/Recognizer";
const recognizer = new Recognizer();

test("Recognize correct binary string", () => {
  expect(
    recognizer.recognize("http://www.youtube.com/watch?v=lK-zaWCp-co&feature=g-all-u&context=G27a8a4aFAAAAAAAAAAA", [
      "youtube-url"
    ])
  ).toStrictEqual([
    {
      data: {
        string: "http://www.youtube.com/watch?v=lK-zaWCp-co&feature=g-all-u&context=G27a8a4aFAAAAAAAAAAA"
      },
      type: "youtube-url",
      value: "http://www.youtube.com/watch?v=lK-zaWCp-co&feature=g-all-u&context=G27a8a4aFAAAAAAAAAAA"
    }
  ]);
  expect(recognizer.recognize("http://youtu.be/AXaoi6dz59A", ["youtube-url"])).toStrictEqual([
    {
      data: {
        string: "http://youtu.be/AXaoi6dz59A"
      },
      type: "youtube-url",
      value: "http://youtu.be/AXaoi6dz59A"
    }
  ]);
  expect(
    recognizer.recognize("youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA", [
      "youtube-url"
    ])
  ).toStrictEqual([
    {
      data: {
        string: "youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA"
      },
      type: "youtube-url",
      value: "youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA"
    }
  ]);
  expect(
    recognizer.recognize(
      "https://youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA",
      ["youtube-url"]
    )
  ).toStrictEqual([
    {
      data: {
        string: "https://youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA"
      },
      type: "youtube-url",
      value: "https://youtube.com/watch?gl=NL&hl=nl&feature=g-vrec&context=G2584313RVAAAAAAAABA&v=35LqQPKylEA"
    }
  ]);
});

test("Do not recognize wrong binary string", () => {
  expect(recognizer.recognize("http://www.mytube.com/watch?v=35LqQPKylEA", ["youtube-url"])).toStrictEqual([]);
  // TODO: Does not work
  //   expect(recognizer.recognize("http://www.youtube.com/watch?b=35LqQPKylEA", ["youtube-url"])).toStrictEqual([]);
  expect(recognizer.recognize("www.youtube.com")).toStrictEqual([]);
});
