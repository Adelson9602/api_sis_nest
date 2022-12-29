import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetEntradaInventario {
  @PrimaryGeneratedColumn('increment')
  idDetEntradaInventario: number;

  @Column('int', {
    width: 6,
  })
  idEncEntradaInv: number;

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
  cantidadIngresar: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valUnitario: number;

  @Column('varchar', {
    length: 128,
  })
  observacion: string;
}
