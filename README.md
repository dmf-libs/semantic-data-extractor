<p align="center">
  <img width="440" src="https://raw.githubusercontent.com/kolarski/semanticDataExtractor/master/logo.png?raw=true" alt="Semantic Data Extractor logo">
</p>

<p align="center">A tool that can recognize and infer data types and semantic meaning from strings</p>

<p align="center">
  <img src="https://img.shields.io/github/release/kolarski/semanticDataExtractor.svg" />
  
  <a href="https://travis-ci.org/kolarski/semanticDataExtractor">
    <img src="https://travis-ci.org/kolarski/semanticDataExtractor.svg?branch=master" />
  </a>
  <a href="https://www.codacy.com/app/kolarski/semanticDataExtractor?utm_source=github.com&utm_medium=referral&utm_content=kolarski/semanticDataExtractor&utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/246f318de5194047afde4532bd8d186c" />
  </a>

  <a href="https://codeclimate.com/github/kolarski/semanticDataExtractor/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/3afb0d6655605a004c11/maintainability" />
  </a>
  <a href="https://codeclimate.com/github/kolarski/semanticDataExtractor/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3afb0d6655605a004c11/test_coverage" /></a>
  
  <img src="https://img.shields.io/david/kolarski/semanticDataExtractor.svg" />
</p>

## Getting started

Install it with <strong>npm</strong>:

```
npm install semantic-data-extractor --save
```

or <strong>yarn</strong>:

```
yarn add semantic-data-extractor
```

Then import it and use it:

```js
import Recognizer from "semantic-data-extractor";

const recognizer = new Recognizer();
recognizer.recognize("+90.0, -127.554334");
```

You get as response a <strong>list</strong> of <a href="https://github.com/kolarski/semantic-data-extractor/blob/master/src/interfaces/IRecognizedType.ts">IRecognizedType</a> with all matching types that fit the data.

For the example above this is the response:

```js
[
  {
    type: "geo-location",
    data: {
      lat: 90,
      lon: -127.554334,
      string: "+90.0, -127.554334"
    }
  }
];
```

🎉 Congrats, enjoy using Semantic Data Extractor!

## Usage

You can use the recognizer to recognize and extract various forms of data from strings:

```js
const recognizer = new Recognizer();

recognizer.recognize("+90.0, -127.554334"); // type: "geo-location"
recognizer.recognize("ISBN 0 93028 923 4"); // type: "isbn"
recognizer.recognize("1080::8:800:200C:417A"); // type: "IPv6"
recognizer.recognize("example@gmail.com"); // type: "email"
recognizer.recognize("#ffc500"); // type: "html-color"
recognizer.recognize('{"a":42}'); // type: "json"
recognizer.recognize("30%"); // type: "percentage"
recognizer.recognize("Denmark"); // type: "country"
recognizer.recognize("A+"); // type: "blood-group"
```

and many more... (see documentation below)

---

### Specify list of recognizers

You can specifiy list of recognizers to use and ignore all others.

For example we might want to recognize only <strong>boolean</strong> values and ignore the <strong>integer</strong> recognizer.

```js
const recognizer = new Recognizer();

recognizer.recognize("1", ["boolean"]);
/*
[
  {
    type: "boolean",
    data: { bool: true }
  }
]
*/
```

## Documentation

<a target="_blank" href="https://github.com/kolarski/semantic-data-extractor/tree/master/src/recognizers">View Recognizers Source</a>

<a target="_blank" href="https://github.com/kolarski/semantic-data-extractor/tree/master/tests">View Recognizers tests / usage</a>

This is the initial set of Recognizers:

- [x] Boolean
- [x] URL
- [x] DateTime
- [x] Time
- [x] Integer number
- [x] Float number
- [x] Mac Address
- [x] Binary string
- [x] File Path
- [x] IPv4
- [x] IPv4 Socket
- [x] IPv6
- [x] Email
- [x] Top Level Domain (TLD)
- [x] Country
- [x] Geo Location
- [x] Percentage
- [x] ISBN
- [x] Credit Card
- [x] HTML Colors
- [x] Programming comment
- [x] EU VAT Number
- [x] JSON
- [x] MD5
- [x] Blood Group
- [x] CIDR
- [x] YouTube video URL
- [x] Musical Chords
- [ ] JWT Token
- [ ] Image URL
- [ ] US States
- [ ] City
- [ ] Person Name
- [ ] Person Title
- [ ] Currency
- [ ] BG phone number
- [ ] BG Address
- [ ] GUID - http://www.regexlib.com/REDetails.aspx?regexp_id=3851, http://www.regexlib.com/REDetails.aspx?regexp_id=4918
- [ ] TCP Port - http://www.regexlib.com/REDetails.aspx?regexp_id=1236
- [ ] UK Postal codes - http://www.regexlib.com/REDetails.aspx?regexp_id=1047
- [ ] Apache common log format - http://www.regexlib.com/REDetails.aspx?regexp_id=1085
- [ ] Social Security Number - All Rules Enforced - http://www.regexlib.com/REDetails.aspx?regexp_id=2850
- [ ] DMS Coordinate - http://www.regexlib.com/REDetails.aspx?regexp_id=3219

## Contribution

Feel free to add suggestions, PRs, comments and bug reports.

## Notes

    Add Performance test into `General.test.ts` (test with long string like md5 string)

## Authors

Alex Kolarski (aleks.rk@gmail.com)

## License

(The MIT License)

Copyright (c) 2019

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
