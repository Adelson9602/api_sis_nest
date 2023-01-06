import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InventarioInstalar {
  @PrimaryGeneratedColumn('increment')
  idInvInstalar: number;

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

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadDisponible: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadPendiente: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadInvFisico: number;

  @Column('datetime')
  fechaInvFisico: Date;
}
