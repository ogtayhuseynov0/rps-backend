import {Body, Controller, Get, Post} from '@nestjs/common';
import { GameService } from './game.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Choice } from './interfaces/Choice';
import { GameChoiceDto } from './dto/GameChoice.dto';

@Controller('game')
@ApiTags('Game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('/choice')
  @ApiResponse({
    status: 200,
    description: 'Returns Computer Choice',
    type: Choice,
  })
  getChoice(@Body() gameChoice: GameChoiceDto) {
    return this.gameService.getComputerChoice(gameChoice);
  }
}
