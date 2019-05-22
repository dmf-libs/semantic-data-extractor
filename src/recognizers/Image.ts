import IRecognizer from "../interfaces/IRecognizer";

// import FileExtention from "../recognizerHelpers/FileExtention";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class Image implements IRecognizer {
  name: string = "image-link";
  matchedExtentions: Array<string> = ["jpg", "jpeg", "gif", "png", "svg"];
  recognize(text: string): IRecognizedType | null {
    console.log(text);
    return null;
  }
}
