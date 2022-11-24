import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UsuarioMovil {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: string;

  @Column('int', {
    width: 12,
  })
  idMovil: string;

  @Column('tinyint', {
    width: 12,
    comment: '0: INACTIVO, 1: ACTIVO',
  })
  estado: string;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  idUsarioControl: string;

  @Column('timestamp', {
    comment: 'Datos de control',
  })
  fechaHora: string;
}
