import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, ObjectId } from 'mongoose';
import { Match } from 'src/matches/entities/match.entity';
export type MatchDocument = HydratedDocument<MatchEvent>;

@Schema()
export class ChangeScoreMatchEvent {
    kind: string;
    timestamp: Date;
    match: Match;
    
    @Prop()
    score: string;
}

@Schema()
export class ChangeServiceMatchEvent {
    kind: string;
    timestamp: Date;
    match: Match;

    @Prop()
    service: string;
    @Prop()
    receiver: string;
}

@Schema({ discriminatorKey: 'kind' })
export class MatchEvent {
    @Prop({
        type: String,
        required: true,
        enum: [
            ChangeScoreMatchEvent.name,
            ChangeServiceMatchEvent.name,
        ]
    })
    kind: string;
    /**
     * Describe to which match this event belongs to.
     */
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Match' })
    match: Match;

    /** When did the event occur */
    @Prop()
    timestamp: Date;
}

export const MatchEventSchema = SchemaFactory.createForClass(MatchEvent);
export const ChangeScoreMatchEventSchema = SchemaFactory.createForClass(ChangeScoreMatchEvent);
export const ChangeServiceMatchEventSchema = SchemaFactory.createForClass(ChangeServiceMatchEvent);