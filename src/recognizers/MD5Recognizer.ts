import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";
export default class MD5Recognizer implements IRecognizer {
  name: string = "md5";
  recognize(text: string): IRecognizedType | null {
    const md5RegExp = RegExp(/^[0-9a-f]+$/);
    const result = md5RegExp.test(text.toLowerCase());

    if (text.length === 32 && result) {
      return {
        type: this.name,
        value: text,
        data: {
          string: text
        }
      };
    }
    return null;
  }
}
