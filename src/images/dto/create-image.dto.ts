import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateImageDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNotEmpty()
  @IsString()
  file: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
