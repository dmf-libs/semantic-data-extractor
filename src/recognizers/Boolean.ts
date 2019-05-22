import IRecognizer from "../interfaces/IRecognizer";
import TypeEnum from './../TypeEnum';

export default class Boolean implements IRecognizer {
    type: TypeEnum = TypeEnum.Boolean
    recognize(text: string): boolean {
        return ['true', 'false'].indexOf(text) !== -1;
    }
} 