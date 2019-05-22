import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class Integer implements IRecognizer {
  name: string = "integer";
  recognize(text: string): IRecognizedType | null {
    if (/^-{0,1}\d+$/.test(text)) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: parseInt(text, 10)
      };
    }
    return null;
  }
}
