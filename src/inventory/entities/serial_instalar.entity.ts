import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialInstalar {
  @PrimaryGeneratedColumn('increment')
  id: number;

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
  idLote11: number;

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
    comment: '0 si no está asignado',
  })
  idMovil: number;

  @Column('int', {
    width: 4,
    default: 0,
    comment: '0 si no está asignado',
  })
  idProyecto: number;

  @Column('datetime')
  fechaControl: Date;
}
