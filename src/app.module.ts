import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from './matches/matches.module';
import { PlayersModule } from './players/players.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MatchEventsModule } from './match-events/match-events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017'),
    MatchesModule, 
    PlayersModule, MatchEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
