import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetalleOrdenCompra {
  @PrimaryGeneratedColumn('increment')
  idDetalleOrdenCompra: number;

  @Column('int', {
    width: 5,
  })
  idEncOrdenCompra1: number;

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

  @Column('bit')
  iva: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valorUnitario: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valorIva: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valorTotalProd: number;

  @Column('varchar', {
    length: 128,
  })
  observaciones: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 20,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
