import IRecognizer from "../interfaces/IRecognizer";
import TypeEnum from './../TypeEnum';

export default class Boolean implements IRecognizer {
    type: TypeEnum = TypeEnum.Date
    recognize(text: string): boolean {
        return ['10.04.2015'].indexOf(text) !== -1;
    }
} 