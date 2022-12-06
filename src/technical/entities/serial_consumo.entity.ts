import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialConsumo {
  @PrimaryGeneratedColumn('increment')
  idSerialConsumo: number;

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

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('int', {
    width: 5,
  })
  idSubtipoConsumos: number;

  @Column('tinyint', {
    width: 1,
    default: 0,
    comment: '0: Pendiente consumo 1: Consumido',
  })
  qryCalro: number;

  @Column('timestamp')
  fechaControl: Date;
}
