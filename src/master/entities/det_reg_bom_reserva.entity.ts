import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetRegBomReserva {
  @PrimaryGeneratedColumn('increment')
  idDetRegBomReserva: number;

  @Column('varchar', {
    length: 50,
  })
  idBom: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantBomReserva: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantBomDevolucion: number;

  @Column('varchar', {
    length: 64,
  })
  observacion: string;

  @Column('int', {
    comment: '1: Reservado, 2: Devolución',
  })
  tipoMovimiento: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
