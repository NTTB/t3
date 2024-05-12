import { ApiProperty } from '@nestjs/swagger';

export class CreateTournamentDto {
  @ApiProperty()
  name: string;

  @ApiProperty({required: false})
  startDate?: Date;

  @ApiProperty({required: false})
  endDate?: Date;
}
