import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  middleName: string;
  @ApiProperty()
  lastName: string;
}
