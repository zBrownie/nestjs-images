import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dtos/createImage.dto';
import mongoose from 'mongoose';
import { UpdateImageDto } from './dtos/updateImage.dto';

@Controller('i')
export class ImagesController {
  constructor(private imagesService: ImagesService) {}

  @Post('upload')
  @UsePipes(new ValidationPipe())
  async createImage(@Body() newImage: CreateImageDto) {
    return this.imagesService.createImage(newImage);
  }

  @Get()
  async getImages() {
    return this.imagesService.getAllImages();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) throw new HttpException('Image not found', 400);

    const image = await this.imagesService.getImageById(id);

    if (!image) throw new HttpException('Image not found', 400);
    return image;
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe())
  async updateImage(
    @Param('id') id: string,
    @Body() updateImageDto: UpdateImageDto,
  ) {
    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) throw new HttpException('Image not found', 400);

    const image = await this.imagesService.getImageById(id);
    if (!image) throw new HttpException('Image not found', 400);

    const updatedImage = await this.imagesService.updateImage(
      new mongoose.Types.ObjectId(id),
      updateImageDto,
    );

    if (!updatedImage) throw new HttpException('Image not found', 400);
    return updateImageDto;
  }

  @Patch('views/:id')
  @UsePipes(new ValidationPipe())
  async updateViewsImage(@Param('id') id: string) {
    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) throw new HttpException('Image not found', 400);

    const image = await this.imagesService.getImageById(id);
    if (!image) throw new HttpException('Image not found', 400);

    return this.imagesService.updateViewsImage(
      new mongoose.Types.ObjectId(id),
      { views: image.views + 1 },
    );
  }

  @Delete(':id')
  async deleteImage(@Param('id') id: string) {
    const isIdValid = mongoose.Types.ObjectId.isValid(id);
    if (!isIdValid) throw new HttpException('Image not found', 400);

    const image = await this.imagesService.getImageById(id);
    if (!image) throw new HttpException('Image not found', 400);

    return this.imagesService.deleteImage(new mongoose.Types.ObjectId(id));
  }
}
