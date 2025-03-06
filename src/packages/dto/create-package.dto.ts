// src/packages/dto/create-package.dto.ts

import { IsNumber, IsString } from 'class-validator';

export class CreatePackageDto {
  @IsNumber()
  length: number;

  @IsNumber()
  width: number;

  @IsNumber()
  height: number;

  @IsNumber()
  weight: number;

  @IsString()
  content: string;
}
