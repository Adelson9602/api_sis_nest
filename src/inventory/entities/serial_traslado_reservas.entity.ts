import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialTrasladoReservas {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 8,
  })
  idTrasladoReserva4: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('timestamp')
  fechaControl: Date;
}
