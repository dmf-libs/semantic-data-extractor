import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";
import moment from "moment";

export default class DateTime implements IRecognizer {
  name: string = "datetime";
  recognize(text: string): IRecognizedType | null {
    try {
      // Do not recognize integers as dates
      const isInt = /^-{0,1}\d+$/.test(text);

      if (moment(new Date(text)).isValid() && !isInt) {
        return {
          type: this.name,
          value: text,
          sanatizedValue: moment(new Date(text)).toString()
        };
      }
      return null;
    } catch (err) {
      return null;
    }
  }
}
