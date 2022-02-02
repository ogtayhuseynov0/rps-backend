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
export const ComputerResponse: string[] = [
  ResponseTypeEnum.ROCK,
  ResponseTypeEnum.PAPER,
  ResponseTypeEnum.SCISSORS,
];
