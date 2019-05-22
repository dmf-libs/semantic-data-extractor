import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Cliff Wagner
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=975
 */
export default class MacAddress implements IRecognizer {
  name: string = "binary";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^([0-1])+$/.test(text);

    if (isMatch) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: {
          string: text
        }
      };
    }
    return null;
  }
}
