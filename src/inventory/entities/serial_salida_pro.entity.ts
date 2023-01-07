import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialSalidaPro {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 5,
  })
  idEncSalidaPro: number;

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

  @Column('varchar', {
    length: 36,
  })
  adicional1: string;

  @Column('varchar', {
    length: 36,
  })
  adicional2: string;

  @Column('datetime')
  fechaControl: Date;
}
