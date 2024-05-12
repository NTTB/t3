import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type TournamentDocument = HydratedDocument<Tournament>;

@Schema()
export class Tournament {
  @Prop()
  name: string;
  @Prop()
  startDate?: Date;
  @Prop()
  endDate?: Date;
}
export const TournamentSchema = SchemaFactory.createForClass(Tournament);
