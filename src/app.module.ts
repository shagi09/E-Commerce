import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DatabaseConfig } from './config/database.config';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseConfig,
    AuthModule, UsersModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
