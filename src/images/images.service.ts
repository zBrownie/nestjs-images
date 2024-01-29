import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { UpdateViewsImageDto } from './dto/update-views-image.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from './entities/image.entity';

@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image.name) private repository: Model<Image>) {}

  create(createImageDto: CreateImageDto) {
    return this.repository.create(createImageDto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.repository.findById(+id);
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.repository.findByIdAndUpdate(+id, updateImageDto);
  }

  updateViews(id: number, updateViewsImageDto: UpdateViewsImageDto) {
    return this.repository.findByIdAndUpdate(+id, updateViewsImageDto);
  }

  remove(id: number) {
    return this.repository.findByIdAndDelete(+id);
  }
}
