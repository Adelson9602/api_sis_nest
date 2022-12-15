import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bodega {
  @PrimaryGeneratedColumn('increment')
  idBodega: number;

  @Column('varchar', {
    length: 36,
  })
  bodega: string;

  @Column('int', {
    width: 2,
  })
  idCiudad: number;

  @Column('int', {
    comment: '0: Inactivo, 1: Active',
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: number;

  @Column('timestamp')
  fechaHora: Date;
}
