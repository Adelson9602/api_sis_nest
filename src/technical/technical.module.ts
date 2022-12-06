import { Module } from '@nestjs/common';
import { TechnicalService } from './technical.service';
import { TechnicalController } from './technical.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  SerialTrasladoMovil,
  VisitaInterna,
  ConsumoRollo,
  DetalleConsumo,
  InventarioMovil,
  DetalleTrasladoMovil,
  ActividadesClaro,
  DetConsumosDelete,
  GrupoTrabajo,
  Reposicion,
  RolloConsumoDelete,
  RolloTrasladoMoviles,
  SerialConsumoDelete,
  SerialConsumo,
} from './entities';

@Module({
  controllers: [TechnicalController],
  providers: [TechnicalService],
  imports: [
    TypeOrmModule.forFeature([
      SerialTrasladoMovil,
      VisitaInterna,
      DetalleConsumo,
      ConsumoRollo,
      InventarioMovil,
      DetalleTrasladoMovil,
      ActividadesClaro,
      DetConsumosDelete,
      GrupoTrabajo,
      Reposicion,
      RolloConsumoDelete,
      RolloTrasladoMoviles,
      SerialConsumoDelete,
      SerialConsumo,
    ]),
  ],
})
export class TechnicalModule {}
