import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type MatchDocument = HydratedDocument<Match>;

@Schema()
export class Match {
    @Prop()
    displayName: string;
    @Prop()
    homePlayerIds: string[];
    @Prop()
    awayPlayerIds: string[];
}

export const MatchSchema = SchemaFactory.createForClass(Match);