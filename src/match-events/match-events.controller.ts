import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { MatchEventsService } from './match-events.service';
import {
  CreateGameStateChangeEventDto,
  CreateScoreChangeEventDto,
  CreateServiceChangeEventDto,
  CreateTimeOutEventDto,
} from './dto/create-match-event.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('matches/:matchId/events')
@ApiTags('match-events')
export class MatchEventsController {
  constructor(private readonly matchEventsService: MatchEventsService) {}

  @Post('service-change')
  createServiceChange(
    @Param('matchId') matchId: string,
    @Body() body: CreateServiceChangeEventDto,
  ) {
    return this.matchEventsService.CreateServiceChange(matchId, body);
  }

  @Post('score')
  createScore(
    @Param('matchId') matchId: string,
    @Body() body: CreateScoreChangeEventDto,
  ) {
    return this.matchEventsService.createScore(matchId, body);
  }

  @Post('timeout')
  createTimeout(
    @Param('matchId') matchId: string,
    @Body() body: CreateTimeOutEventDto,
  ) {
    return this.matchEventsService.createTimeOut(matchId, body);
  }

  @Post('game-state-change')
  createGameState(
    @Param('matchId') matchId: string,
    @Body() body: CreateGameStateChangeEventDto,
  ) {
    return this.matchEventsService.createGameStateChange(matchId, body);
  }

  @Get()
  findAll(@Param('matchId') matchId: string) {
    return this.matchEventsService.findByMatchId(matchId);
  }

  @Get(':id')
  findOne(@Param('matchId') matchId: string, @Param('id') id: string) {
    return this.matchEventsService.findOne(matchId, id);
  }

  @Delete(':id')
  remove(@Param('matchId') matchId: string, @Param('id') id: string) {
    return this.matchEventsService.remove(matchId, id);
  }
}
