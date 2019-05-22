import IRecognizer from "../interfaces/IRecognizer";
import TypeEnum from '../TypeEnum';

export default class FileExtention implements IRecognizer {
    type = TypeEnum.Undefined
    matchedExtentions: Array<string> = [];
    recognize(text: string): boolean {
        for(let ext of this.matchedExtentions) {
            if(text.endsWith(`.${ext}`)) return true;
        }
        return false;
    }
} 