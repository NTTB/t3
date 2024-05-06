import { ApiProperty } from "@nestjs/swagger";

export class CreateMatchDto {
    @ApiProperty()
    displayName: string;

    @ApiProperty()
    homePlayerIds: string[];

    @ApiProperty()
    awayPlayerIds: string[];
}
