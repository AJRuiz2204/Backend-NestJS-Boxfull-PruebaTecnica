import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtStrategy } from './jwt.strategy';

// Calcular tiempo de expiración para el token (en segundos)
// Si JWT_EXPIRES_IN está definido se toma su valor numérico, de lo contrario se usa 86400 segundos (1 día).
// Se garantiza que la duración mínima sea de 1800 segundos (30 min)
const jwtExpiresIn = process.env.JWT_EXPIRES_IN
  ? Number(process.env.JWT_EXPIRES_IN)
  : 86400;
const expiresIn = jwtExpiresIn < 1800 ? 1800 : jwtExpiresIn;

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your_jwt_secret',
      signOptions: { expiresIn }, // Duración mínima: 30 min
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
