import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UsuarioBodega {
  @PrimaryGeneratedColumn('increment')
  idUsuarioBodega: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 2,
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
