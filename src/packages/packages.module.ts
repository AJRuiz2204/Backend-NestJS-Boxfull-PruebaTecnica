import { Module } from '@nestjs/common';
import { PackagesController } from './package.controller';
import { PackagesService } from './package.service';

@Module({
  controllers: [PackagesController],
  providers: [PackagesService],
})
export class PackagesModule {}
