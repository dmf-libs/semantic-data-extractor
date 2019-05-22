import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Brano Gerzo
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=937
 */
export default class IPv4Socket implements IRecognizer {
  name: string = "IPv4-socket";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^((?:2[0-5]{2}|1\d{2}|[1-9]\d|[1-9])\.(?:(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)\.){2}(?:2[0-5]{2}|1\d{2}|[1-9]\d|\d)):(\d|[1-9]\d|[1-9]\d{2,3}|[1-5]\d{4}|6[0-4]\d{3}|654\d{2}|655[0-2]\d|6553[0-5])$/.test(
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
