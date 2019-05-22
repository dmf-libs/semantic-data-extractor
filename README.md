<p align="center">
  <img width="440" height="345" src="https://raw.githubusercontent.com/kolarski/semanticDataExtractor/master/logo.png?raw=true" alt="Semantic Data Extractor logo">
</p>

> A tool that can recognize and infer data types and semantic meaning from strings

![Release](https://img.shields.io/github/release/kolarski/semanticDataExtractor.svg) [![Build Status](https://travis-ci.org/kolarski/semanticDataExtractor.svg?branch=master)](https://travis-ci.org/kolarski/semanticDataExtractor) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/246f318de5194047afde4532bd8d186c)](https://www.codacy.com/app/kolarski/semanticDataExtractor?utm_source=github.com&utm_medium=referral&utm_content=kolarski/semanticDataExtractor&utm_campaign=Badge_Grade) <a href="https://codeclimate.com/github/kolarski/semanticDataExtractor/maintainability"><img src="https://api.codeclimate.com/v1/badges/3afb0d6655605a004c11/maintainability" /></a> <a href="https://codeclimate.com/github/kolarski/semanticDataExtractor/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3afb0d6655605a004c11/test_coverage" /></a> ![Dependencies](https://img.shields.io/david/kolarski/semanticDataExtractor.svg)

## Contribution

Feel free to add suggestions, PRs, comments and bug reports.

## Goals

The initial main recognition goals are:

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
- [ ] Image URL
- [ ] US States
- [ ] City
- [ ] Person Name
- [ ] Person Title
- [ ] Currency
- [ ] BG phone number
- [ ] BG Address
- [ ] TCP Port - http://www.regexlib.com/REDetails.aspx?regexp_id=1236
- [ ] UK Postal codes - http://www.regexlib.com/REDetails.aspx?regexp_id=1047
- [ ] Apache common log format - http://www.regexlib.com/REDetails.aspx?regexp_id=1085

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
