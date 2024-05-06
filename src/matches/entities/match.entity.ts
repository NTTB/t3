import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Player } from 'src/players/entities/player.entity';
export type MatchDocument = HydratedDocument<Match>;

@Schema()
export class Match {
    @Prop()
    displayName: string;
    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]})
    homePlayers: Player[];
    @Prop({type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }]})
    awayPlayers: Player[];
}

export const MatchSchema = SchemaFactory.createForClass(Match);