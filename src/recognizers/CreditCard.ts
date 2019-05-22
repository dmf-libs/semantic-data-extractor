import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Steven Smith
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=49
 */
export default class CreditCard implements IRecognizer {
  name: string = "credit-card";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/.test(text);

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
