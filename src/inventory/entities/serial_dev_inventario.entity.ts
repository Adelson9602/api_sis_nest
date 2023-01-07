import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialDevInventario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 11,
  })
  idDevInventario: number;

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

  @Column('timestamp')
  fechaHora: Date;
}
