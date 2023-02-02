import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { ActualizarUsuarioDto } from './dto/update-usuario.dto';
import { CrearUsuarioDto } from './dto/create-usuario.dto';
import { PaginationDto } from '../../common/dtos/pagination.dto';

@Controller('access/usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post('crear')
  create(@Body() crearUsuarioDto: CrearUsuarioDto) {
    return this.usuarioService.create(crearUsuarioDto);
  }

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.usuarioService.findAll(paginationDto);
  }

  @Get(':usuario')
  async findOne(@Param('usuario') usuario: string) {
    const user = await this.usuarioService.findOne(+usuario);
    if (!user) throw new NotFoundException(`Usuario ${usuario} no encontrado`);
    return user;
  }

  @Patch('editar/:idUsuario')
  update(
    @Param('idUsuario') idUsuario: string,
    @Body() actualizarUsuarioDto: ActualizarUsuarioDto,
  ) {
    return this.usuarioService.update(+idUsuario, actualizarUsuarioDto);
  }

  @Delete(':usuario')
  async remove(@Param('usuario') usuario: string) {
    this.usuarioService.remove(+usuario);
  }
}
