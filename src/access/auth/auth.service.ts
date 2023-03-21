import { Repository } from 'typeorm';

import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { CreateUserDto, LoginUserDto } from './dto';

import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Usuario } from '../usuario/entities/usuario.entity';
import { ErrorsService } from './common/errors/errors.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');

  constructor(
    @InjectRepository(Usuario)
    private readonly userRepository: Repository<Usuario>,

    private readonly errorService: ErrorsService,

    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const { password, ...userDetails } = createUserDto;

      const user = this.userRepository.create({
        ...userDetails,
        password: bcrypt.hashSync(password, 10),
      });

      await this.userRepository.save(user);

      this.logger.log(
        `Usuario with email ${createUserDto.email} saved successfully.`,
      );

      delete user.password;

      return {
        ...user,
        token: this.getJwtToken({ id: user.idUsuario }),
      };
    } catch (err) {
      this.errorService.DBHandleError(err);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, usuario } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { usuario },
      select: {
        usuario: true,
        password: true,
        idUsuario: true,
        primerApellido: true,
        primerNombre: true,
      },
    });

    if (!user) throw new UnauthorizedException(`Credentials aren't not valid`);

    if (!bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException(`Credentials aren't not valid`);

    delete user.password;

    return {
      status: 'success',
      message: 'Login successful',
      dataUser: user,
      token: this.getJwtToken({ id: user.idUsuario }),
    };
  }

  /**
   * Generamos y firmamos el JWT.
   * @param payload
   * @returns JWT firmado.
   */
  private getJwtToken(payload: JwtPayload) {
    return this.jwtService.sign(payload);
  }

  async checkAuthStatus(user: Usuario) {
    return {
      ...user,
      token: this.getJwtToken({ id: user.idUsuario }),
    };
  }
}
