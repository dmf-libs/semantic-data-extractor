import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";
import contries from "./../datasets/countries";

export default class Country implements IRecognizer {
  name: string = "country";
  recognize(text: string): IRecognizedType | null {
    const textLowerCase = text.toLowerCase();
    const isMatch = contries.find(
      c => c.name.toLowerCase() === textLowerCase || c.code.toLowerCase() === textLowerCase
    );

    if (isMatch) {
      return {
        type: this.name,
        value: text,
        data: isMatch
      };
    }
    return null;
  }
}
