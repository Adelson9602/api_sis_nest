import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CrearUsuario } from 'src/access/dto/create-user.dto';
import { Usuario } from 'src/access/entities';
import { Repository } from 'typeorm';
import { UpdateAccessDto } from '../../dto/update-access.dto';

@Injectable()
export class UsuarioService {
  // constructor(
  //   @InjectRepository(Usuario)
  //   private readonly usuarioRepository: Repository<Usuario>,
  // ) {}

  create(usuarioDto: CrearUsuario) {
    return 'This action adds a new access';
  }

  findAll() {
    return `This action returns all access`;
  }

  findOne(id: number) {
    return `This action returns a #${id} access`;
  }

  update(id: number, updateAccessDto: UpdateAccessDto) {
    return `This action updates a #${id} access`;
  }

  remove(id: number) {
    return `This action removes a #${id} access`;
  }
}
