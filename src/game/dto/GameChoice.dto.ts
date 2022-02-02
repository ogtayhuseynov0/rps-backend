import { ApiProperty } from '@nestjs/swagger';
import { Choice } from '../interfaces/Choice';

export class GameChoiceDto {
  @ApiProperty()
  gameID: string;

  @ApiProperty()
  userChoice: Choice;
}
