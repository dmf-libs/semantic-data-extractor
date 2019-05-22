import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class Float implements IRecognizer {
  name: string = "float";
  recognize(text: string): IRecognizedType | null {
    if (/^\d+[\.|\,]\d+$/.test(text)) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: parseFloat(text.replace(",", "."))
      };
    }
    return null;
  }
}
