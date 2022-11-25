import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bigint', {
    width: 12,
    primary: true,
  })
  usuario: number;

  @Column('varchar', {
    length: 36,
  })
  primerApellido: string;

  @Column('varchar', {
    length: 36,
  })
  segundoApellido: string;

  @Column('varchar', {
    length: 36,
  })
  primerNombre: string;

  @Column('varchar', {
    length: 36,
  })
  segundoNombre: string;

  @Column('tinyint', {
    width: 1,
  })
  estadoActualizacion: number;

  @Column('tinyint', {
    width: 1,
    comment:
      '0: si no debe diligenciar el preoperacional, 1: si debe diligenciar el preoperacional',
  })
  preoperacional: number;

  @Column('int', {
    width: 3,
  })
  idRol: number;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('varchar', {
    length: 512,
  })
  password: string;

  @Column('varchar', {
    length: 200,
  })
  foto: string;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  idUsuarioControl: number;

  @Column('timestamp', {
    comment: 'Datos de control',
  })
  fechaHora: Date;
}
