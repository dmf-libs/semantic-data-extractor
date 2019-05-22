import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class Boolean implements IRecognizer {
  name: string = "boolean";
  recognize(text: string): IRecognizedType | null {
    if (["yes", "no"].indexOf(text.toLowerCase()) !== -1) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: text.toLowerCase() === "yes"
      };
    }
    if (["true", "false"].indexOf(text.toLowerCase()) !== -1) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: text.toLowerCase() === "true"
      };
    }
    if (["1", "0"].indexOf(text) !== -1) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: text === "1"
      };
    }
    return null;
  }
}
