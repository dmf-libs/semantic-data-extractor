import IRecognizer from "../interfaces/IRecognizer";
import TypeEnum from '../TypeEnum';

export default class URL implements IRecognizer {
    type: TypeEnum = TypeEnum.URL
    recognize(text: string): boolean {
        return text.indexOf('http://') === 0 ||  text.indexOf('https://') === 0 ||  text.indexOf('www.') === 0;
    }
} 