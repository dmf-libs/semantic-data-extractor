import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Sourjya Sankar Sen
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=2671
 */
export default class BloodGroup implements IRecognizer {
  name: string = "blood-group";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(A|B|AB|O)[+-]$/.test(text);

    if (isMatch) {
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
