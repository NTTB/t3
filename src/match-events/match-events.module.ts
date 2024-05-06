import { Module } from '@nestjs/common';
import { MatchEventsService } from './match-events.service';
import { MatchEventsController } from './match-events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChangeScoreMatchEvent, ChangeScoreMatchEventSchema, ChangeServiceMatchEvent, ChangeServiceMatchEventSchema, MatchEvent, MatchEventSchema, TimeOutMatchEvent, TimeOutMatchEventSchema } from './entities/match-event.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
       name: MatchEvent.name, 
       schema: MatchEventSchema,
       discriminators: [
         { name: ChangeScoreMatchEvent.name, schema: ChangeScoreMatchEventSchema },
         { name: ChangeServiceMatchEvent.name, schema: ChangeServiceMatchEventSchema },
         { name: TimeOutMatchEvent.name, schema: TimeOutMatchEventSchema },
       ]
       }])  
  ],
  controllers: [MatchEventsController],
  providers: [MatchEventsService],
})
export class MatchEventsModule {}
