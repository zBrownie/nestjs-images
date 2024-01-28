import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Image {
  @Prop({ unique: false, required: true })
  title: string;

  @Prop({ unique: false, required: false })
  description: string;

  @Prop({ unique: false, required: true })
  size: string;

  @Prop({ unique: false, required: true })
  file: string;

  @Prop({ unique: false, required: false })
  views?: number;

  @Prop({ unique: false, required: true })
  userId: string;
}

export const ImageSchema = SchemaFactory.createForClass(Image);
