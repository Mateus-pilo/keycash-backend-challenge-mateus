import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealtyModule } from './modules/realty/realty.module';
import * as config from './database/database.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({ ...config }),
    RealtyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
