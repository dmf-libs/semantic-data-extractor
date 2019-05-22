import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Eugene Kardash
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=2717
 */
export default class CIDR implements IRecognizer {
  name: string = "cidr";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])\/(\d{1}|[0-2]{1}\d{1}|3[0-2])$/.test(
      text
    );

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
