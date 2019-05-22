import IRecognizer from "../interfaces/IRecognizer";
import TypeEnum from '../TypeEnum';
import FileExtention from "../recognizerHelpers/FileExtention";

export default class Image extends FileExtention implements IRecognizer {
    type: TypeEnum = TypeEnum.Image
    matchedExtentions: Array<string> = ['jpg', 'jpeg', 'gif', 'png', 'svg'];
} 