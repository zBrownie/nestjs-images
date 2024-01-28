import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateViewsImageDto {
  @IsNumber()
  @IsNotEmpty()
  views: number;
}
