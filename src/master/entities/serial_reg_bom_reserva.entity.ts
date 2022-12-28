import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialRegBomReserva {
  @PrimaryGeneratedColumn('increment')
  idSerialRegBomReserva: number;

  @Column('int', {
    width: 11,
  })
  idDetRegBomReserva: number;

  @Column('varchar', {
    length: 50,
  })
  idBom: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
