import { ApiProperty } from '@nestjs/swagger';
import { MatchPlayer } from '../entities/match.entity';

export class CreateMatchDto {
  @ApiProperty()
  displayName: string;

  @ApiProperty({ type: [MatchPlayer], minItems: 2 })
  players: MatchPlayer[];
}
