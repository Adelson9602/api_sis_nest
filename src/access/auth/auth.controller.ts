import { Controller, Post, Body } from '@nestjs/common';
import { CrearUsuarioDto } from 'src/access/usuario/dto/create-usuario.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  loginUser(@Body() createAuthDto: CrearUsuarioDto) {
    return this.authService.login(createAuthDto);
  }
}
