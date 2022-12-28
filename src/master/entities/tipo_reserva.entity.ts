import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoReserva {
  @PrimaryGeneratedColumn('increment')
  idTipoReserva: number;

  @Column('varchar', {
    length: 150,
  })
  tipoReserva: string;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
