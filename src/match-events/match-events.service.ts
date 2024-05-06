import { Injectable } from '@nestjs/common';
import { CreateScoreChangeEventDto, CreateServiceChangeEventDto } from './dto/create-match-event.dto';
import { ChangeScoreMatchEvent, ChangeServiceMatchEvent, MatchEvent } from './entities/match-event.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Match } from 'src/matches/entities/match.entity';

@Injectable()
export class MatchEventsService {
  constructor(
    @InjectModel(MatchEvent.name) private dataModel: Model<MatchEvent>,
    @InjectModel(Match.name) private matchModel: Model<Match>,
  ) { }

  async createScore(matchId: string, createDto: CreateScoreChangeEventDto) {
    const newEntity = new this.dataModel<ChangeScoreMatchEvent>({
      kind: ChangeScoreMatchEvent.name,
      match: await this.matchModel.findById(matchId).exec(),
      timestamp: new Date(),
      score: createDto.score,
    });

    return newEntity.save();
  }

  async CreateServiceChange(matchId: string, createDto: CreateServiceChangeEventDto) {
    const newEntity = new this.dataModel<ChangeServiceMatchEvent>({
      kind: ChangeServiceMatchEvent.name,
      match: await this.matchModel.findById(matchId).exec(),
      timestamp: new Date(),
      service: createDto.serviceId,
      receiver: createDto.receiverId,
    });

    return newEntity.save();
  }

  findAll() {
    return this.dataModel.find().exec();
  }

  findByMatchId(matchId: string) {
    return this.dataModel.find().where({'match': matchId}).exec();
  }
  

  findOne(matchId: string, id: string) {
    return this.dataModel.findById(id).where({'match': matchId}).exec();
  }

  remove(matchId: string, id: string) {
    return this.dataModel.findByIdAndDelete(id).where({'match': matchId}).exec();
  }
}
