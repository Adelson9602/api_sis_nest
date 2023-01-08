import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DireccionMac,
  MesaAyuda,
  ModulosFronted,
  PermisosBasicos,
  PermisosUsuario,
  Usuario,
  UsuarioBodega,
  UsuarioMovil,
} from './entities';

@Module({
  controllers: [AccessController],
  providers: [AccessService],
  imports: [
    TypeOrmModule.forFeature([
      DireccionMac,
      MesaAyuda,
      ModulosFronted,
      PermisosBasicos,
      PermisosUsuario,
      UsuarioBodega,
      UsuarioMovil,
      Usuario,
    ]),
  ],
})
export class AccessModule {}
