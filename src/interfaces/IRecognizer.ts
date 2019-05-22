import TypeEnum from '../TypeEnum';

export default interface IRecognizer {
    type: TypeEnum
    recognize(text: string): boolean
}