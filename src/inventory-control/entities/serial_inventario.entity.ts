import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialInventario {
  @PrimaryGeneratedColumn()
  idSerialInventario: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('int', {
    width: 5,
    default: 0,
    comment: '0: No asignado, 1: Asignado',
  })
  idMovil: number;
}
