import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DireccionMac,
  MesaAyuda,
  ModulosFronted,
  PermisosBasicos,
  PermisosUsuario,
  UsuarioBodega,
  UsuarioMovil,
} from './entities';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DireccionMac,
      MesaAyuda,
      ModulosFronted,
      PermisosBasicos,
      PermisosUsuario,
      UsuarioBodega,
      UsuarioMovil,
    ]),
    UsuarioModule,
  ],
})
export class AccessModule {}
