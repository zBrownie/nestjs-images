import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImageSchema } from 'src/images/image.schema';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Image',
        schema: ImageSchema,
      },
    ]),
  ],
  providers: [ImagesService],
  controllers: [ImagesController],
})
export class ImagesModule {}
