import { ApiProperty } from '@nestjs/swagger';
import { TournamentStatus } from '../entities/tournament.entity';

export class CreateTournamentDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  startDate?: Date;

  @ApiProperty({ required: false })
  endDate?: Date;

  @ApiProperty({ required: true, default: TournamentStatus.PENDING })
  status: TournamentStatus;
}
