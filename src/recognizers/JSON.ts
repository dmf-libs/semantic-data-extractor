import IRecognizer from "../interfaces/IRecognizer";
import IRecognizedType from "../interfaces/IRecognizedType";

export default class JSONRecognizer implements IRecognizer {
  name: string = "json";
  recognize(text: string): IRecognizedType | null {
    try {
      const json = JSON.parse(text);
      if (typeof json === "object" && !!json) {
        return {
          type: this.name,
          value: text,
          data: {
            string: text,
            json
          }
        };
      }
    } catch (error) {}
    return null;
  }
}
