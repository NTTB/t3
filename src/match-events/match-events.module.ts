import { Module } from '@nestjs/common';
import { MatchEventsService } from './match-events.service';
import { MatchEventsController } from './match-events.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ChangeScoreMatchEvent, ChangeScoreMatchEventSchema, ChangeServiceMatchEvent, ChangeServiceMatchEventSchema, MatchEvent, MatchEventSchema } from './entities/match-event.entity';
import { MatchesModule } from 'src/matches/matches.module';
import { Match, MatchSchema } from 'src/matches/entities/match.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Match.name, schema: MatchSchema }]),
    MongooseModule.forFeature([{
       name: MatchEvent.name, 
       schema: MatchEventSchema,
       discriminators: [
         { name: ChangeScoreMatchEvent.name, schema: ChangeScoreMatchEventSchema },
         { name: ChangeServiceMatchEvent.name, schema: ChangeServiceMatchEventSchema },
       ]
       }])  
  ],
  controllers: [MatchEventsController],
  providers: [MatchEventsService],
})
export class MatchEventsModule {}
