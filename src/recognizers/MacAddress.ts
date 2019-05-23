import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Ted Rudyk
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=154
 */
export default class MacAddress implements IRecognizer {
  name: string = "mac-address";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/.test(text);

    if (isMatch) {
      return {
        type: this.name,
        value: text,
        data: { string: text }
      };
    }
    return null;
  }
}
