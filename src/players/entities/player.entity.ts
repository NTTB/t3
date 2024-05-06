import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { HydratedDocument } from 'mongoose';
export type PlayerDocument = HydratedDocument<Player>;

@Schema()
export class Player {
    @ApiProperty()
    @Prop()
    firstName: string;
    @ApiProperty()
    @Prop()
    middleName: string;
    @ApiProperty()
    @Prop()
    lastName: string;
}

export const PlayerSchema = SchemaFactory.createForClass(Player);