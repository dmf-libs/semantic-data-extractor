import IRecognizer from "./interfaces/IRecognizer";

import BooleanRecognizer from './recognizers/Boolean';
import DateRecognizer from './recognizers/Date';
import URLRecognizer from './recognizers/URL';
import ImageRecognizer from './recognizers/Image'

import TypeEnum from "./TypeEnum";

export default class Recognizer {
    recognizers: Array<IRecognizer> =  [
        new BooleanRecognizer(),
        new DateRecognizer(),
        new URLRecognizer(),
        new ImageRecognizer()
    ];
    recognize(text: string): TypeEnum {
        for(let recognizer of this.recognizers) {
            if(recognizer.recognize(text)) {
                return recognizer.type;
            }
        }
        return TypeEnum.Undefined;
    }
}