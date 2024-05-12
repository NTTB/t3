import { Injectable } from '@nestjs/common';
import {
  CreateGameStateChangeEventDto,
  CreateScoreChangeEventDto,
  CreateServiceChangeEventDto,
  CreateTimeOutEventDto,
} from './dto/create-match-event.dto';
import {
  ChangeScoreMatchEvent,
  ChangeServiceMatchEvent,
  TimeOutMatchEvent,
  MatchEvent,
  ChangeGameStateMatchEvent,
} from './entities/match-event.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MatchEventsService {
  constructor(
    @InjectModel(MatchEvent.name) private dataModel: Model<MatchEvent>,
  ) {}

  createScore(matchId: string, createDto: CreateScoreChangeEventDto) {
    const newEntity = new this.dataModel<ChangeScoreMatchEvent>({
      kind: ChangeScoreMatchEvent.name,
      matchId: matchId,
      timestamp: new Date(),
      score: createDto.score,
    });

    return newEntity.save();
  }

  CreateServiceChange(matchId: string, createDto: CreateServiceChangeEventDto) {
    const newEntity = new this.dataModel<ChangeServiceMatchEvent>({
      kind: ChangeServiceMatchEvent.name,
      matchId: matchId,
      timestamp: new Date(),
      service: createDto.serviceId,
      receiver: createDto.receiverId,
    });

    return newEntity.save();
  }

  createTimeOut(matchId: string, createDto: CreateTimeOutEventDto) {
    const newEntity = new this.dataModel<TimeOutMatchEvent>({
      kind: TimeOutMatchEvent.name,
      matchId: matchId,
      timestamp: new Date(),
      side: createDto.side,
      type: createDto.type,
      relatedTimeoutEventId: createDto.relatedTimeoutEventId,
    });

    return newEntity.save();
  }

  createGameStateChange(matchId: string, body: CreateGameStateChangeEventDto) {
    const newEntity = new this.dataModel<ChangeGameStateMatchEvent>({
      kind: ChangeGameStateMatchEvent.name,
      matchId: matchId,
      timestamp: new Date(),
      game: body.game,
      state: body.type,
    });

    return newEntity.save();
  }

  findAll() {
    return this.dataModel.find().exec();
  }

  findByMatchId(matchId: string) {
    return this.dataModel.find().where({ matchId: matchId }).exec();
  }

  findOne(matchId: string, id: string) {
    return this.dataModel.findById(id).where({ matchId: matchId }).exec();
  }

  remove(matchId: string, id: string) {
    return this.dataModel
      .findByIdAndDelete(id)
      .where({ matchId: matchId })
      .exec();
  }
}
