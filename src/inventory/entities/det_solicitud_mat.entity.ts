import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetSolicitudMat {
  @PrimaryGeneratedColumn('increment')
  idDetSolicitudMat: number;

  @Column('int', {
    width: 6,
  })
  idSolicitudMat: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidad: number;

  @Column('varchar', {
    length: 128,
  })
  observaciones: string;
}
