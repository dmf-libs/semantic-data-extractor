import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Michael Ash
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=463
 */

//TODO: http://www.regexlib.com/REDetails.aspx?regexp_id=12945
export default class ISBN implements IRecognizer {
  name: string = "isbn";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^ISBN\x20(?=.{13}$)\d{1,5}([- ])\d{1,7}\1\d{1,6}\1(\d|X)$/.test(text);

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
