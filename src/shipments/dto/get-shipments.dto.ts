import { IsOptional, IsString } from 'class-validator';

export class GetShipmentsDto {
  @IsOptional()
  @IsString()
  municipality?: string;

  @IsOptional()
  @IsString()
  department?: string;
}
