import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Chris Craft
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=975
 */
export default class HTMLColor implements IRecognizer {
  name: string = "html-color";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^#?([a-f]|[A-F]|[0-9]){3}(([a-f]|[A-F]|[0-9]){3})?$/.test(text);

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
