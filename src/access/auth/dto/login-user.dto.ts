import {
  IsNumber,
  IsPositive,
  IsString,
  Matches,
  MinLength,
  // MinLength,
} from 'class-validator';

export class LoginUsuarioDto {
  @IsNumber()
  @IsPositive()
  usuario: number; // Se toma como usuario la cédula

  @IsString()
  @MinLength(6)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'La contraseña debe tener una letra mayúscula, minúscula y un número',
  })
  password: string;
}
