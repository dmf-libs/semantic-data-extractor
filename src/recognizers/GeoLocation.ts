import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Iain Fraser
 * @see https://stackoverflow.com/a/18690202/567897
 */

//TODO: extend with http://www.regexlib.com/REDetails.aspx?regexp_id=1102
export default class GeoLocation implements IRecognizer {
  name: string = "geo-location";
  recognize(text: string): IRecognizedType | null {
    const regex = /^(?<lat>[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?)),\s*(?<lon>[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?))$/;
    const isMatch = regex.test(text);
    const match = regex.exec(text);
    if (isMatch && match && match.groups) {
      return {
        type: this.name,
        value: text,
        sanatizedValue: {
          string: text,
          lat: parseFloat(match.groups.lat),
          lon: parseFloat(match.groups.lon)
        }
      };
    }
    return null;
  }
}
