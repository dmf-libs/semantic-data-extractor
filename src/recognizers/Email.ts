import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author bilou mcgyver
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=333
 */
export default class Email implements IRecognizer {
  name: string = "email";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})$/.test(
      text
    );

    if (isMatch) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: text
      };
    }
    return null;
  }
}
