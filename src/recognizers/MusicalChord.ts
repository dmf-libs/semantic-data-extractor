import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Steve Blair
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=3863
 */
export default class MusicalChord implements IRecognizer {
  name: string = "musical-chord";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^([A-G][b#]?[m]?((6\/9|11|13|[679]))?((dim|dom|aug|sus|min|maj|add|no|m|M|-|\+)(11|13|15|[23456789])?){0,2}([b#\-\+][59]){0,2}(\/[A-G][b#]?)?)$/.test(
      text
    );

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
