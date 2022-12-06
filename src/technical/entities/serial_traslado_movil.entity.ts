import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialTrasladoMovil {
  @PrimaryGeneratedColumn('increment')
  idSerialTrasladoMovil: number;

  @Column('int', {
    nullable: false,
    width: 9,
  })
  idTrasladoMovil: number;

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
  serial: number;

  @Column('timestamp')
  fechaControl: Date;
}
