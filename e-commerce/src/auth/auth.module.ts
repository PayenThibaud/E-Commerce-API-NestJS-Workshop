import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
<<<<<<< HEAD
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, AuthService, JwtService, UsersService],
=======
import { ProductService } from 'src/products/product.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtService, ProductService, UsersService],
>>>>>>> 97f1edd (fix: import product service as provider)
})
export class AuthModule {}
