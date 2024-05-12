import { Module } from '@nestjs/common';
import { MatchesModule } from './matches/matches.module';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchEventsModule } from './match-events/match-events.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    MatchesModule,
    PlayersModule,
    MatchEventsModule,
    TournamentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
