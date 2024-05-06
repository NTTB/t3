import { ApiProperty } from "@nestjs/swagger";

export class CreateScoreChangeEventDto {
    @ApiProperty()
    score: string;
}
export class CreateServiceChangeEventDto {
    @ApiProperty()
    receiverId: string;
    @ApiProperty()
    serviceId: string;
}
