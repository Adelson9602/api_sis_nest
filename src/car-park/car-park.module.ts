import { Module } from '@nestjs/common';
import { CarParkService } from './car-park.service';
import { CarParkController } from './car-park.controller';

@Module({
  controllers: [CarParkController],
  providers: [CarParkService]
})
export class CarParkModule {}
