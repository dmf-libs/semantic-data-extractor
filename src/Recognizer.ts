import IRecognizer from "./interfaces/IRecognizer";

import BooleanRecognizer from "./recognizers/Boolean";
import DateTimeRecognizer from "./recognizers/DateTime";
import URLRecognizer from "./recognizers/URLRecognizer";
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
import ISBNRecognizer from "./recognizers/ISBN";
import CreditCardRecognizer from "./recognizers/CreditCard";
import TimeRecognizer from "./recognizers/Time";
import HTMLColorRecognizer from "./recognizers/HTMLColor";
import ProgrammingCommentRecognizer from "./recognizers/ProgrammingComment";
import VatRecognizer from "./recognizers/VAT";
import JSONRecognizer from "./recognizers/JSON";
import MD5Recognizer from "./recognizers/MD5Recognizer";
import BloodGroupRecognizer from "./recognizers/BloodGroup";

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
    new PercentageRecognizer(),
    new ISBNRecognizer(),
    new CreditCardRecognizer(),
    new TimeRecognizer(),
    new HTMLColorRecognizer(),
    new ProgrammingCommentRecognizer(),
    new VatRecognizer(),
    new JSONRecognizer(),
    new MD5Recognizer(),
    new BloodGroupRecognizer()
  ];

  recognize(text: string, recognizersList: Array<string> = []): Array<IRecognizedType> {
    text = text.trim();
    let recognizedAs: Array<IRecognizedType> = [];
    for (let recognizer of this.recognizers) {
      if (this.shouldRecognize(recognizersList, recognizer)) {
        recognizedAs = this.recognizeOne(text, recognizer, recognizedAs);
      }
    }
    return recognizedAs;
  }

  shouldRecognize(recognizersList: Array<String>, recognizer: IRecognizer) {
    return (
      recognizersList.length === 0 || (recognizersList.length > 0 && recognizersList.indexOf(recognizer.name) !== -1)
    );
  }

  recognizeOne(text: string, recognizer: IRecognizer, recognizedAs: Array<IRecognizedType>) {
    const output = recognizer.recognize(text);
    if (output) {
      recognizedAs.push(output);
    }

    return recognizedAs;
  }
}
