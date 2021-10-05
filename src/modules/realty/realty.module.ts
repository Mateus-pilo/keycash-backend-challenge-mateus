import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RealtyController } from './realty.controller';
import { RealtyRepostiry } from './realty.repository';
import { RealtyService } from './realty.service';

@Module({
  imports: [TypeOrmModule.forFeature([RealtyRepostiry])],
  controllers: [RealtyController],
  providers: [RealtyService],
})
export class RealtyModule {}
