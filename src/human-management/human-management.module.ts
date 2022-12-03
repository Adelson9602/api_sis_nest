import { Module } from '@nestjs/common';
import { HumanManagementService } from './human-management.service';
import { HumanManagementController } from './human-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  CentroCosto,
  CertificadosLaborales,
  DatosCorporativos,
  InformacionEscolar,
  InformacionFamiliar,
  InformacionPersonal,
  InformacionVivienda,
  SeguridadSocial,
} from './entities';

@Module({
  controllers: [HumanManagementController],
  providers: [HumanManagementService],
  imports: [
    TypeOrmModule.forFeature([
      CentroCosto,
      CertificadosLaborales,
      DatosCorporativos,
      InformacionEscolar,
      InformacionFamiliar,
      InformacionPersonal,
      InformacionVivienda,
      SeguridadSocial,
    ]),
  ],
})
export class HumanManagementModule {}
