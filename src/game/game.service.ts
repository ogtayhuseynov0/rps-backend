import { Injectable } from '@nestjs/common';
import { ComputerResponse } from './gameTypes';
import { GameChoiceDto } from './dto/GameChoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './entities/Game.entity';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
  ) {}
  async getComputerChoice(gameChoice: GameChoiceDto) {
    const game = await this.gameRepository.findOne({
      where: {
        uid: gameChoice.gameID,
      },
    });
    if (game){
    } else {

    }
    return ComputerResponse[Math.floor(Math.random() * 3)];
  }
}
