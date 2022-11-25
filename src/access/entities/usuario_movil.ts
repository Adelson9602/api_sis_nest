import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UsuarioMovil {
  @PrimaryGeneratedColumn('increment')
  idUsuarioMovil: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('int', {
    width: 12,
  })
  idMovil: string;

  @Column('tinyint', {
    width: 12,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  usuarioControl: number;

  @Column('timestamp', {
    comment: 'Datos de control',
  })
  fechaHora: Date;
}
