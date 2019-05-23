import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class Boolean implements IRecognizer {
  name: string = "boolean";
  recognizeBoolean(text: string, boolValues: Array<string>): IRecognizedType | null {
    if (boolValues.indexOf(text.toLowerCase()) !== -1) {
      return {
        type: this.name,
        value: text,
        data: {
          bool: text.toLowerCase() === boolValues[0]
        }
      };
    }
    return null;
  }
  boolValuesArray: Array<Array<string>> = [["yes", "no"], ["true", "false"], ["1", "0"]];
  recognize(text: string): IRecognizedType | null {
    for (let boolValues of this.boolValuesArray) {
      const result = this.recognizeBoolean(text, boolValues);
      if (result !== null) {
        return result;
      }
    }
    return null;
  }
}
