import { Module } from '@nestjs/common';
import { FormatsService } from './formats.service';
import { FormatsController } from './formats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CategoriaItem,
  CategoriaOpciones,
  CheqValiAprobacion,
  DetChequeoAlturas,
  EncabezadoTrasladoMovil,
  FormatosEspeciales,
  IntegrantesChequeo,
  ItemsChequeo,
} from './entities';

@Module({
  controllers: [FormatsController],
  providers: [FormatsService],
  imports: [
    TypeOrmModule.forFeature([
      CategoriaItem,
      CategoriaOpciones,
      CheqValiAprobacion,
      DetChequeoAlturas,
      EncabezadoTrasladoMovil,
      FormatosEspeciales,
      IntegrantesChequeo,
      ItemsChequeo,
    ]),
  ],
})
export class FormatsModule {}
