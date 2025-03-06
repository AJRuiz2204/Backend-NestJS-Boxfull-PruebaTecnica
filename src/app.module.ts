import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PackagesModule } from './packages/packages.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ShipmentsModule } from './shipments/shipments.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PackagesModule,
    UsersModule,
    AuthModule,
    ShipmentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
