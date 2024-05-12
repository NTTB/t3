import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Player } from './entities/player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { Model } from 'mongoose';

@Injectable()
export class PlayersService {
  constructor(@InjectModel(Player.name) private dataModel: Model<Player>) {}

  create(createDto: CreatePlayerDto) {
    const newEntity = new this.dataModel(createDto);
    return newEntity.save();
  }

  findAll() {
    return this.dataModel.find().exec();
  }

  findOne(id: string) {
    return this.dataModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdatePlayerDto) {
    await this.dataModel.findByIdAndUpdate(id, updateDto).exec();
    return await this.findOne(id);
  }

  remove(id: string) {
    return this.dataModel.findByIdAndDelete(id).exec();
  }
}
