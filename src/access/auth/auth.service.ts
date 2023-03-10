import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Repository } from 'typeorm';
import { LoginUsuarioDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,
  ) {}

  async login(loginUsuarioDto: LoginUsuarioDto) {
    const { usuario, password } = loginUsuarioDto;
    console.log(password);
    const user = await this.userRepository.findOneBy({ usuario });
    console.log(user);
  }
}
