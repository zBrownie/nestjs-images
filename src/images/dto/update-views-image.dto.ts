import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateViewsImageDto {
  @IsNotEmpty()
  @IsNumber()
  views: number;
}
