import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";
import topLevelDomains from "./../datasets/tlds";

export default class TLD implements IRecognizer {
  name: string = "tld";
  recognize(text: string): IRecognizedType | null {
    const isMatch = topLevelDomains.indexOf(text.toLowerCase()) !== -1;

    if (isMatch) {
      return {
        type: this.name,
        value: text,
        data: {
          string: text.toLowerCase()
        }
      };
    }
    return null;
  }
}
