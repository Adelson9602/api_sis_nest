import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BomInventario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 50,
  })
  idBom: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: number;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadReservada: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadEntregada: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadConsumida: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadDevuelta: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadPendiente: number;

  @Column('tinyint')
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
