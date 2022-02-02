import { GameEntity } from '../entities/Game.entity';

export interface GameResponse {
  game: GameEntity;
  compChoice: string;
  res: number;
}
