import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { META_ROLES } from '../decorators/role-protected.decorator';
import { Usuario } from 'src/access/usuario/entities/usuario.entity';

@Injectable()
export class UserRoleGuard implements CanActivate {
  private readonly logger = new Logger('UserRoleGuard');

  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const validRoles: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );

    if (!validRoles) return true;
    if (validRoles.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as Usuario;

    if (!user) {
      this.logger.error(`Error, the UserRoleGuard no recibió un usuario.`);
      throw new BadRequestException(`Usuario does not exist.`);
    }

    // for (const role of user.roles) if (validRoles.includes(role)) return true;

    throw new ForbiddenException(
      `Usuario ${user.primerNombre} ${user.primerApellido} need a valid role: [${validRoles}]`,
    );
  }
}
