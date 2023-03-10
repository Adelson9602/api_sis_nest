import { Rol } from 'src/master/entities';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  idUsuario: number;

  @Column('bigint', {
    width: 12,
    unique: true,
  })
  usuario: number;

  @Column('varchar', {
    length: 36,
  })
  primerApellido: string;

  @Column('varchar', {
    length: 36,
    nullable: true,
  })
  segundoApellido: string;

  @Column('varchar', {
    length: 36,
  })
  primerNombre: string;

  @Column('varchar', {
    length: 36,
    nullable: true,
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

  @ManyToOne(() => Rol, (rol) => rol.id, {
    cascade: true,
    onUpdate: 'CASCADE',
  })
  @JoinTable()
  rol: number;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('varchar', {
    length: 512,
    select: false,
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

  @CreateDateColumn()
  fechaHora: Date;
}
