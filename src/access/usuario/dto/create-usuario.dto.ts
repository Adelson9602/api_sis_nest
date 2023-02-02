import {
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  // MinLength,
} from 'class-validator';

export class CrearUsuarioDto {
  @IsNumber()
  @IsPositive()
  @IsOptional()
  idUsuario?: number;

  @IsNumber()
  @IsPositive()
  // @MinLength(1)
  usuario: number; // Se toma como usuario la cédula

  @IsString()
  // @MinLength(1)
  primerApellido: string;

  @IsString()
  // @MinLength(1)
  @IsOptional()
  segundoApellido: string;

  @IsString()
  // @MinLength(1)
  primerNombre: string;

  @IsString()
  // @MinLength(1)
  @IsOptional()
  segundoNombre: string;

  @IsNumber()
  // @MinLength(1)
  @IsPositive()
  estadoActualizacion: number;

  @IsNumber()
  // @MinLength(1)
  @IsPositive()
  preoperacional: number;

  @IsNumber()
  // @MinLength(1)
  @IsPositive()
  idRol: number;

  @IsNumber()
  // @MinLength(1)
  @IsPositive()
  estado: number;

  @IsString()
  // @MinLength(8)
  password: string;

  @IsString()
  // @MinLength(1)
  foto: string;

  @IsNumber()
  // @MinLength(1)
  @IsPositive()
  idUsuarioControl: number;

  // fechaHora?: Date;
}
