import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity()
export class DetalleConsumo {
  @PrimaryGeneratedColumn('increment')
  id: number;

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

  @Column('float') // longitud 20,2
  cantidadConsumo: Double;

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
    nullable: true,
  })
  observacion: string;

  @Column('int', {
    width: 1,
    nullable: true,
    default: 0,
    comment: '0=pendiente, 1=aprobado, 2=novedad, 3=rechazado',
  })
  estadoFacturacion: number;

  @Column('int', {
    width: 1,
    nullable: true,
    default: 0,
    comment: '0=pendiente, 1=aprobado, 2=novedad,',
  })
  estadoLogistica: number;
}
