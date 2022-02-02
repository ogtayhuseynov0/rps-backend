import { Injectable } from '@nestjs/common';
import { ComputerResponse } from './gameTypes';
import {GameChoiceDto} from "./dto/GameChoice.dto";

@Injectable()
export class GameService {
  getComputerChoice(gameChoice: GameChoiceDto) {
    return ComputerResponse[Math.floor(Math.random() * 3)];
  }
}
