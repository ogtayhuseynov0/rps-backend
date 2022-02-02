import { ApiProperty } from '@nestjs/swagger';

export class Choice {
  @ApiProperty()
  type: string;

  @ApiProperty()
  userID: string;
}
