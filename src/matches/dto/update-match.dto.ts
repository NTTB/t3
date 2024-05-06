import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';
import { ObjectId } from 'mongoose';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
    @ApiProperty()
    displayName: string;

    @ApiProperty()
    homePlayers: ObjectId[];

    @ApiProperty()
    awayPlayers: ObjectId[];
}
