import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearUsuarioDto } from './dto/create-usuario.dto';
import { ActualizarUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class UsuarioService {
  private readonly logger = new Logger('UsuarioService');

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async create(crearUsuarioDto: CrearUsuarioDto) {
    try {
      const usuario = this.usuarioRepository.create(crearUsuarioDto);
      // guarda en DB
      await this.usuarioRepository.save(usuario);

      return usuario;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit, offset } = paginationDto;
    return this.usuarioRepository.find({
      take: limit,
      skip: offset,
    });
  }

  findOne(usuario: number) {
    return this.usuarioRepository.findOneBy({ usuario });
  }

  async update(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto) {
    const user = await this.usuarioRepository.preload({
      idUsuario,
      ...actualizarUsuarioDto,
    });

    if (!user)
      throw new NotFoundException(`Usuario con id ${idUsuario} no encontrado`);

    try {
      await this.usuarioRepository.save(user);
      return user;
    } catch (error) {
      console.log('first');
      this.handleExceptions(error);
    }
  }

  async remove(usuario: number) {
    const user = await this.findOne(usuario);
    this.usuarioRepository.remove(user);
  }

  private handleExceptions(error: any) {
    if (error.sqlMessage)
      throw new InternalServerErrorException(error.sqlMessage);
    this.logger.error(error);
    throw new InternalServerErrorException(
      'Error, por favor revise el log de errores',
    );
  }
}
