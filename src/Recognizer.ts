import IRecognizer from "./interfaces/IRecognizer";

import BooleanRecognizer from "./recognizers/Boolean";
import DateTimeRecognizer from "./recognizers/DateTime";
import URLRecognizer from "./recognizers/URLRecognizer";
// import ImageRecognizer from './recognizers/Image'

import IRecognizedType from "./interfaces/IRecognizedType";
import IntegerRecognizer from "./recognizers/Integer";
import FloatRecognizer from "./recognizers/Float";

export default class Recognizer {
  recognizers: Array<IRecognizer> = [
    new BooleanRecognizer(),
    new DateTimeRecognizer(),
    new URLRecognizer(),
    new IntegerRecognizer(),
    new FloatRecognizer()
    // new ImageRecognizer()
  ];
  recognize(text: string): Array<IRecognizedType> {
    text = text.trim();
    const recognizedAs = [];
    for (let recognizer of this.recognizers) {
      const output = recognizer.recognize(text);
      if (output) {
        recognizedAs.push(output);
      }
    }
    return recognizedAs;
  }
}
