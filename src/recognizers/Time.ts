import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Carlos R. L. Rodrigues
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=981
 */
export default class Time implements IRecognizer {
  name: string = "time";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(([0-1]?[0-9])|([2][0-3])):([0-5]?[0-9])(:([0-5]?[0-9]))?$/.test(text);

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
