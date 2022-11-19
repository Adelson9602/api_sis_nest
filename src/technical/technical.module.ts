import { Module } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { TechnicalController } from './technical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MobileTransferSerial, InternalVisits } from './entities';
import { ConsumptionDetail } from './entities/consumption_detail.entity';
import { ConsumptionRollo } from './entities/consumption_rollo.entity';

@Module({
  controllers: [TechnicalController],
  providers: [TechnicalService],
  imports: [
    TypeOrmModule.forFeature([
      MobileTransferSerial,
      InternalVisits,
      ConsumptionDetail,
      ConsumptionRollo,
    ]),
  ],
})
export class TechnicalModule {}
