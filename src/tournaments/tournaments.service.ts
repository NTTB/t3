import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Tournament } from './entities/tournament.entity';
import { Model } from 'mongoose';

@Injectable()
export class TournamentsService {
  constructor(
    @InjectModel(Tournament.name) private dataModel: Model<Tournament>,
  ) {}
  create(createDto: CreateTournamentDto) {
    const newEntity = new this.dataModel(createDto);
    return newEntity.save();
  }

  findAll() {
    return this.dataModel.find().exec();
  }

  findOne(id: string) {
    return this.dataModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdateTournamentDto) {
    await this.dataModel.findByIdAndUpdate(id, updateDto).exec();
    return this.findOne(id);
  }

  remove(id: string) {
    return this.dataModel.findByIdAndDelete(id).exec();
  }
}
