import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetSalidaPro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    width: 5,
  })
  idEncSalidaProv: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: number;

  @Column('int', {
    width: 2,
  })
  idLote6: number;

  @Column('int', {
    width: 2,
  })
  idReserva: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadSalida: number;

  @Column('varchar', {
    length: 128,
  })
  observacion: number;
}
