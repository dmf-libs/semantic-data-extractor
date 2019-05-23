import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Sean Schricker
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=42
 */
export default class IPv4 implements IRecognizer {
  name: string = "IPv4";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(([01]?\d?\d|2[0-4]\d|25[0-5])\.){3}([01]?\d?\d|2[0-4]\d|25[0-5])$/.test(text);

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
