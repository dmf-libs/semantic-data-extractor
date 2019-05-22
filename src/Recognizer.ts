import IRecognizer from "./interfaces/IRecognizer";

import BooleanRecognizer from "./recognizers/Boolean";
import DateTimeRecognizer from "./recognizers/DateTime";
import URLRecognizer from "./recognizers/URLRecognizer";
// import ImageRecognizer from './recognizers/Image'

import IRecognizedType from "./interfaces/IRecognizedType";
import IntegerRecognizer from "./recognizers/Integer";
import FloatRecognizer from "./recognizers/Float";
import MacAddressRecognizer from "./recognizers/MacAddress";
import BinaryRecognizer from "./recognizers/Binary";
import IPv4Recognizer from "./recognizers/IPv4";
import IPv4SocketRecognizer from "./recognizers/IPv4Socket";
import IPv6Recognizer from "./recognizers/IPv6";
import EmailRecognizer from "./recognizers/Email";
import TLDRecognizer from "./recognizers/TLD";
import CountryRecognizer from "./recognizers/Country";
import GeoLocationRecognizer from "./recognizers/GeoLocation";
import PercentageRecognizer from "./recognizers/Percentage";

export default class Recognizer {
  recognizers: Array<IRecognizer> = [
    new BooleanRecognizer(),
    new DateTimeRecognizer(),
    new URLRecognizer(),
    new IntegerRecognizer(),
    new FloatRecognizer(),
    new MacAddressRecognizer(),
    new BinaryRecognizer(),
    new IPv4Recognizer(),
    new IPv4SocketRecognizer(),
    new IPv6Recognizer(),
    new EmailRecognizer(),
    new TLDRecognizer(),
    new CountryRecognizer(),
    new GeoLocationRecognizer(),
    new PercentageRecognizer()
    // new ImageRecognizer()
  ];
  recognize(text: string, recognizers: Array<string> = []): Array<IRecognizedType> {
    text = text.trim();
    const recognizedAs = [];
    for (let recognizer of this.recognizers) {
      if (recognizers.length === 0 || (recognizers.length > 0 && recognizers.indexOf(recognizer.name) !== -1)) {
        const output = recognizer.recognize(text);
        if (output) {
          recognizedAs.push(output);
        }
      }
    }
    return recognizedAs;
  }
}
