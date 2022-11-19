import { Module } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { TechnicalController } from './technical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileTransferSerial, InternalVisits } from './entities';

@Module({
  controllers: [TechnicalController],
  providers: [TechnicalService],
  imports: [TypeOrmModule.forFeature([MobileTransferSerial, InternalVisits])],
})
export class TechnicalModule {}
