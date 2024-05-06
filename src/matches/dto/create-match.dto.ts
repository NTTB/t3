import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

export class CreateMatchDto {
    @ApiProperty()
    displayName: string;

    @ApiProperty()
    homePlayers: ObjectId[];

    @ApiProperty()
    awayPlayers: ObjectId[];
}
