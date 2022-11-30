import { Module } from '@nestjs/common';
import { CarParkService } from './car-park.service';
import { CarParkController } from './car-park.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  AdjuntosPreoperacional,
  DatosVehiculos,
  DetallePreoperacional,
  DocumentosConductor,
  DocumentosVehiculos,
  EncabezadoPreoperacional,
} from './entities';

@Module({
  controllers: [CarParkController],
  providers: [CarParkService],
  imports: [
    TypeOrmModule.forFeature([
      AdjuntosPreoperacional,
      DatosVehiculos,
      DetallePreoperacional,
      DocumentosConductor,
      DocumentosVehiculos,
      EncabezadoPreoperacional,
    ]),
  ],
})
export class CarParkModule {}
