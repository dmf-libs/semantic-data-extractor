import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";
/**
 * @author See File header (./../external/VAT)
 * @see https://www.braemoor.co.uk/software/vat.shtml
 */
import checkVATNumber from "./../external/VAT";

export default class VAT implements IRecognizer {
  name: string = "vat";
  recognize(text: string): IRecognizedType | null {
    const isMatch = checkVATNumber(text);
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
