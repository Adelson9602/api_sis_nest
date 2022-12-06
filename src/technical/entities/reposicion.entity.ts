import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Reposicion {
  @PrimaryGeneratedColumn('increment')
  idReposicion: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioMovil: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidad: number;

  @Column('timestamp')
  fechaSolicitud: Date;

  @Column('bigint', {
    width: 12,
  })
  usuarioAlista: number;

  @Column('tinyint', {
    width: 1,
    comment: '1: Alistado, 0: Pendiente, 2: Rechazado',
  })
  estado: number;

  @Column('timestamp')
  fechaControl: Date;
}
