import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { MatchPlayer } from '../entities/match.entity';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
  @ApiProperty()
  displayName: string;

  @ApiProperty()
  players: MatchPlayer[];
}
