import { ResponseTypeEnum } from '../gameTypes';

export default function choiceResult(
  userChoice: string,
  compChoice: string,
): number {
  if (userChoice === compChoice) {
    return 0;
  } else {
    if (
      userChoice === ResponseTypeEnum.ROCK &&
      compChoice === ResponseTypeEnum.PAPER
    ) {
      return -1;
    } else {
      return 1;
    }
    if (
      userChoice === ResponseTypeEnum.PAPER &&
      compChoice === ResponseTypeEnum.SCISSORS
    ) {
      return -1;
    } else {
      return 1;
    }
    if (
      userChoice === ResponseTypeEnum.SCISSORS &&
      compChoice === ResponseTypeEnum.ROCK
    ) {
      return -1;
    } else {
      return 1;
    }
  }
}
