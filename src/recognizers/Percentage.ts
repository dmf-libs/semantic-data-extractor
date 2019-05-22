import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Andres Garcia
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=498
 */
export default class Percentage implements IRecognizer {
  name: string = "percentage";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/.test(text);

    if (isMatch && text.length > 0) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: {
          percentage: parseFloat(text.replace("%", "")),
          string: text
        }
      };
    }
    return null;
  }
}
