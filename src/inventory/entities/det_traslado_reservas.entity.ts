import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetTrasladoReservas {
  @PrimaryGeneratedColumn('increment')
  idDetTrasladoReservas: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadTrasladar: number;

  @Column('varchar', {
    length: 64,
  })
  observacion: string;
}
