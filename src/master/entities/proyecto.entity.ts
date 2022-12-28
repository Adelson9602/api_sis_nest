import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn('increment')
  idProyecto;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('varchar', {
    length: 24,
    default: 0,
  })
  cuenta: string;

  @Column('varchar', {
    length: 256,
  })
  nombreProyecto: string;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('date', {
    comment: 'Fecha inicio del proyecto',
  })
  fechaInicio: Date;

  @Column('date', {
    comment: 'Fecha fin del proyecto',
  })
  fechaFin;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuaraioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
