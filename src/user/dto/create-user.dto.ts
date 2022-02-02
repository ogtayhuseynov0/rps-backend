import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ nullable: true, required: false })
  userName?: string;
}
