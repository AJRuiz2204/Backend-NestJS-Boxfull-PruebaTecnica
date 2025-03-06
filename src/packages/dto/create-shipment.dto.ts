// src/packages/dto/create-shipment.dto.ts

import {
  IsString,
  IsEmail,
  IsOptional,
  IsDateString,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePackageDto } from './create-package.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateShipmentDto {
  @ApiProperty({ example: '123 Main St' })
  @IsString()
  pickupAddress: string;

  @ApiProperty({ example: '2023-10-25T10:00:00Z' })
  @IsDateString()
  scheduledDate: string;

  @ApiProperty({ example: 'John' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+1234567890' })
  @IsString()
  phone: string;

  @ApiProperty({ example: '456 Elm St' })
  @IsString()
  destinationAddress: string;

  @ApiProperty({ example: 'Departamento Ejemplo' })
  @IsString()
  department: string;

  @ApiProperty({ example: 'Municipio Ejemplo' })
  @IsString()
  municipality: string;

  @ApiProperty({ example: 'Cerca del parque' })
  @IsString()
  referencePoints: string;

  @ApiProperty({ example: 'Sin comentarios adicionales' })
  @IsOptional()
  @IsString()
  comments?: string;

  @ApiProperty({
    type: [Object],
    example: [
      { length: 10, width: 5, height: 5, weight: 2, content: 'Libros' },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePackageDto)
  packages: CreatePackageDto[];
}
