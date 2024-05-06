import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateMatchDto } from './create-match.dto';

export class UpdateMatchDto extends PartialType(CreateMatchDto) {
    @ApiProperty()
    displayName: string;

    @ApiProperty()
    homePlayerIds: string[];

    @ApiProperty()
    awayPlayerIds: string[];
}
