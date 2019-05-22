import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

/**
 * @author Owen Hardy
 * @see http://www.regexlib.com/REDetails.aspx?regexp_id=3514
 */

//TODO: http://www.regexlib.com/REDetails.aspx?regexp_id=4997
export default class YoutubeURL implements IRecognizer {
  name: string = "youtube-url";
  recognize(text: string): IRecognizedType | null {
    const isMatch = /^(http(s?):\/\/)?(www\.)?youtu(be)?\.([a-z])+\/(watch(.*?)(\?|\&)v=)?(.*?)(&(.)*)?$/.test(text);

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
