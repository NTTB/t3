import { Injectable } from '@nestjs/common';
import { CreateMatchDto as createDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';
import { Match } from './entities/match.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MatchesService {
  constructor(@InjectModel(Match.name) private dataModel: Model<Match>) {}

  create(createMatchDto: createDto) {
    const newEntity = new this.dataModel(createMatchDto);
    return newEntity.save();
  }

  findAll() {
    return this.dataModel.find().exec();
  }

  findOne(id: string) {
    return this.dataModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdateMatchDto) {
    await this.dataModel.findByIdAndUpdate(id, updateDto).exec();
    return await this.findOne(id);
  }

  remove(id: string) {
    return this.dataModel.findByIdAndDelete(id).exec();
  }
}
