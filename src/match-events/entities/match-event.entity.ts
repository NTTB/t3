import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Side, TimeoutType } from './events';
export type MatchDocument = HydratedDocument<MatchEvent>;

@Schema()
export class ChangeScoreMatchEvent {
    kind: string;
    matchId: string;
    timestamp: Date;
    
    @Prop()
    score: string;
}

@Schema()
export class ChangeServiceMatchEvent {
    kind: string;
    matchId: string;
    timestamp: Date;

    @Prop()
    service: string;
    @Prop()
    receiver: string;
}

@Schema()
export class TimeOutMatchEvent {
    kind: string;
    matchId: string;
    timestamp: Date;
    
    @Prop({enum: Object.values(Side), required: true})
    side: Side;
    
    @Prop({enum: Object.values(TimeoutType), required: true})
    type: TimeoutType;

    /**
     * Only used when type is 'end'
     */
    @Prop()
    relatedTimeoutEventId?: string;
}

@Schema({ discriminatorKey: 'kind' })
export class MatchEvent {
    @Prop({
        type: String,
        required: true,
        enum: [
            ChangeScoreMatchEvent.name,
            ChangeServiceMatchEvent.name,
            TimeOutMatchEvent.name,
        ]
    })
    kind: string;

    @Prop()
    matchId: string;

    /** When did the event occur */
    @Prop()
    timestamp: Date;
}

export const MatchEventSchema = SchemaFactory.createForClass(MatchEvent);
export const ChangeScoreMatchEventSchema = SchemaFactory.createForClass(ChangeScoreMatchEvent);
export const ChangeServiceMatchEventSchema = SchemaFactory.createForClass(ChangeServiceMatchEvent);
export const TimeOutMatchEventSchema = SchemaFactory.createForClass(TimeOutMatchEvent);