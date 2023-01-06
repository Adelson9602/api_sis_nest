import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncTrasladoReservas {
  @PrimaryGeneratedColumn('increment')
  idTrasladoReserva: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 2,
  })
  idTipoReservaOrige: number;

  @Column('int', {
    width: 2,
  })
  idTipoReservaDestino: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaAutoriza: number;

  @Column('varchar', {
    length: 512,
  })
  observacion: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
