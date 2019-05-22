import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Dinesh Copoosamy
 * Slightly modified
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=776
 */
export default class ProgrammingComment implements IRecognizer {
  name: string = "programming-comment";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^((\/\*(\s*|.*?)*\*\/)|(\/\/.*))$/.test(text);

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
