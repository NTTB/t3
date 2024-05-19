import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type TournamentDocument = HydratedDocument<Tournament>;

export enum TournamentStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  FINISHED = 'FINISHED',
}

@Schema()
export class Tournament {
  @Prop()
  name: string;
  @Prop()
  startDate?: Date;
  @Prop()
  endDate?: Date;
  @Prop({ enum: TournamentStatus, default: TournamentStatus.PENDING })
  status: TournamentStatus;
}
export const TournamentSchema = SchemaFactory.createForClass(Tournament);
