import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialSalidaMatConsumo {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  idSalMatConsumo: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote15: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('timestamp')
  fechaControl: Date;
}
