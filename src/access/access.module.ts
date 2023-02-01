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
  UsuarioBodega,
  UsuarioMovil,
} from './entities';
import { UsuarioModule } from './usuario/usuario.module';
import { Usuario } from './usuario/entities/usuario.entity';

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
    UsuarioModule,
  ],
})
export class AccessModule {}
