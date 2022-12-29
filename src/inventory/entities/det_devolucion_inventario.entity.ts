import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetDevolucionInventario {
  @PrimaryGeneratedColumn('increment')
  idDetDevInventario: number;

  @Column('bigint', {
    width: 11,
  })
  idDevInventario: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadEntCons: number;

  @Column('varchar')
  observacion: string;
}
