import IRecognizedType from "./IRecognizedType";

export default interface IRecognizer {
  name: string;
  recognize(text: string): IRecognizedType | null;
}
