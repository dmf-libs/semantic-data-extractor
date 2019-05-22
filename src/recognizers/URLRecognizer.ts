import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class URLRecognizer implements IRecognizer {
  name: string = "url";
  recognize(text: string): IRecognizedType | null {
    const result = text.indexOf("http://") === 0 || text.indexOf("https://") === 0;

    if (result) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: new URL(text)
      };
    }
    return null;
  }
}
