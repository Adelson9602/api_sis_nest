import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetConsumosDelete {
  @PrimaryGeneratedColumn('increment')
  idDetConsumosDelete: number;

  @Column('bigint', {
    width: 15,
  })
  idEncConsumos: number;

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
  cantidadConsum: number;

  @Column('int', {
    width: 5,
  })
  idSubtipoConsumos: number;

  @Column('int', {
    width: 11,
  })
  cantidadSuptipo: number;

  @Column('varchar', {
    length: 64,
  })
  observacion: string;

  @Column('int', {
    width: 1,
    comment: '0: Pendiente, 1: Aprobado, 2: Novedad, 3: Rechazado',
  })
  estadoFacturacion: number;

  @Column('int', {
    width: 1,
    comment: '0: Pendiente, 1: Aprobado, 2: Novedad',
  })
  estadoLogistica: number;
}
