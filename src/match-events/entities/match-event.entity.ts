import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { GameState, TimeoutSide, TimeoutType } from './enums';
export type MatchDocument = HydratedDocument<MatchEvent>;

/*
 * A few quick guides for this entity:
 * - The MatchEvent entity is the base class for all match events.
 * - We don't want to many different types of events. So if the datastructure is the same, we use the same kind of entity.
 */

@Schema()
export class ChangeScoreMatchEvent {
  kind: string;
  matchId: string;
  timestamp: Date;

  @Prop()
  score: string;
}

@Schema()
export class ChangeGameStateMatchEvent {
  kind: string;
  matchId: string;
  timestamp: Date;

  @Prop()
  game: number;
  @Prop({ enum: Object.values(GameState), required: true })
  state: GameState;
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

  @Prop({ enum: Object.values(TimeoutSide), required: true })
  side: TimeoutSide;

  @Prop({ enum: Object.values(TimeoutType), required: true })
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
      ChangeGameStateMatchEvent.name,
    ],
  })
  kind: string;

  @Prop()
  matchId: string;

  /** When did the event occur */
  @Prop()
  timestamp: Date;
}

export const MatchEventSchema = SchemaFactory.createForClass(MatchEvent);
export const ChangeScoreMatchEventSchema = SchemaFactory.createForClass(
  ChangeScoreMatchEvent,
);
export const ChangeServiceMatchEventSchema = SchemaFactory.createForClass(
  ChangeServiceMatchEvent,
);
export const TimeOutMatchEventSchema =
  SchemaFactory.createForClass(TimeOutMatchEvent);
export const ChangeGameStateMatchEventSchema = SchemaFactory.createForClass(
  ChangeGameStateMatchEvent,
);
