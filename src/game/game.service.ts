import { Injectable } from '@nestjs/common';
import { ComputerResponse } from './gameTypes';
import { GameChoiceDto } from './dto/GameChoice.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameEntity } from './entities/Game.entity';
import choiceResult from './utils/ChoiceResult';
import { User } from '../user/entities/user.entity';
import { GameResponse } from './interfaces/GameResponse';

@Injectable()
export class GameService {
  constructor(
    @InjectRepository(GameEntity)
    private gameRepository: Repository<GameEntity>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getComputerChoice(gameChoice: GameChoiceDto): Promise<GameResponse> {
    let game = await this.gameRepository.findOne({
      where: {
        uid: gameChoice.gameID,
        status: 1,
      },
    });
    const compChoice = ComputerResponse[Math.floor(Math.random() * 3)];
    const choiceRes = choiceResult(gameChoice.userChoice.type, compChoice);
    if (game) {
      if (choiceRes < 0) {
        game.computerPoint = game.computerPoint + 1;
      } else if (choiceRes > 0) {
        game.userPoint = game.userPoint + 1;
      }
      if (game.userPoint === 3 || game.computerPoint === 3) {
        game.status = 0;
        if (game.userPoint === 3) {
          const user = await this.userRepository.findOne({ uid: game.user });
          user.score = user.score + 1;
          this.userRepository.save(user);
        }
      }
      game = await this.gameRepository.save(game);
    } else {
      const gg = this.gameRepository.create({
        user: gameChoice.userChoice.userID,
        userPoint: choiceRes > 0 ? 1 : 0,
        computerPoint: choiceRes < 0 ? 1 : 0,
      });
      game = await this.gameRepository.save(gg);
    }
    return { game: game, compChoice: compChoice, res: choiceRes };
  }
}
