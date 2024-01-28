import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Image } from './image.schema';
import { Model, Types } from 'mongoose';
import { CreateImageDto } from './dtos/createImage.dto';
import { UpdateImageDto } from './dtos/updateImage.dto';
import { UpdateViewsImageDto } from './dtos/updateViewsImage.dto';
@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {}

  createImage(imageDto: CreateImageDto) {
    const newImage = new this.imageModel(imageDto);
    newImage.views = 0;
    return newImage.save();
  }

  getAllImages() {
    return this.imageModel.find();
  }

  getImageById(id: string) {
    return this.imageModel.findById(id);
  }

  updateImage(id: Types.ObjectId, updateImageDto: UpdateImageDto) {
    return this.imageModel.findOneAndUpdate(id, updateImageDto, { new: true });
  }

  updateViewsImage(
    id: Types.ObjectId,
    updateViewsImageDto: UpdateViewsImageDto,
  ) {
    return this.imageModel.findOneAndUpdate(
      id,
      {
        ...updateViewsImageDto,
      },
      { new: true },
    );
  }

  deleteImage(id: Types.ObjectId) {
    return this.imageModel.findByIdAndDelete(id, { new: true });
  }
}
