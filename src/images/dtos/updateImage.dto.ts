import { IsOptional, IsString } from 'class-validator';

export class UpdateImageDto {
  @IsString()
  @IsOptional()
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
