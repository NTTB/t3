import { ApiProperty } from "@nestjs/swagger";
import { Side, TimeoutType } from "../entities/events";

export class CreateScoreChangeEventDto {
    /**
     * Describe what the new score will eb
     * @example `5-3`, `0-0,12-10,0-0`
     */
    @ApiProperty()
    score: string;
}

export class CreateServiceChangeEventDto {
    /**
     * The player id that will serve
     */
    @ApiProperty()
    receiverId: string;

    /**
     * The player id that will receive (needed for doubles)
     */
    @ApiProperty()
    serviceId: string;
}


export class CreateTimeOutEventDto {
    /**
     * The player id that will serve
     */
    @ApiProperty({enum: Side})
    side: Side;

    @ApiProperty({enum: TimeoutType})
    type: TimeoutType;

    @ApiProperty()
    relatedTimeoutEventId?: string;
}