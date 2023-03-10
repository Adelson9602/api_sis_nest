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
  usuario: number; // Se toma como usuario la cédula

  @IsString()
  primerApellido: string;

  @IsString()
  @IsOptional()
  segundoApellido: string;

  @IsString()
  primerNombre: string;

  @IsString()
  @IsOptional()
  segundoNombre: string;

  @IsNumber()
  @IsPositive()
  estadoActualizacion: number;

  @IsNumber()
  @IsPositive()
  preoperacional: number;

  @IsNumber()
  @IsPositive()
  rolId: number;

  @IsNumber()
  @IsPositive()
  estado: number;

  @IsString()
  // @MinLength(8)
  password: string;

  @IsString()
  foto: string;

  @IsNumber()
  @IsPositive()
  idUsuarioControl: number;

  // fechaHora?: Date;
}
