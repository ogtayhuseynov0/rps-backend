import {Choice} from "./interfaces/Choice";

export enum ResponseTypeEnum {
  ROCK = 'rock',
  PAPER = 'paper',
  SCISSORS = 'scissors',
}
export enum ResponseText {
  ROCK = '🤜',
  PAPER = '✋',
  SCISSORS = '✌️',
}
export const ComputerResponse: Choice[] = [
  { type: ResponseTypeEnum.ROCK },
  { type: ResponseTypeEnum.PAPER },
  { type: ResponseTypeEnum.SCISSORS },
];
