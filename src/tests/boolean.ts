import Recognizer from '../Recognizer';
// import assert from 'assert';
// import TypeEnum from '../TypeEnum';
const recognizer = new Recognizer();
// const result = recognizer.recognize('true');
// const result = recognizer.recognize('http://abv.bg');
const result = recognizer.recognize('/euro/coins/comm/shared/img/comm_2016_Lithuania_baltic_culture.jpg');
// assert(result, TypeEnum.Image)
// Timestamp
// Date
// File
// Music File
// Video File
// Document
// Presentation
// Spreadsheet
// City
// Country
// Person Name
// Person Title
// Currency name
// Currency symbol
// BG phone number
// BG Address
console.log(result);