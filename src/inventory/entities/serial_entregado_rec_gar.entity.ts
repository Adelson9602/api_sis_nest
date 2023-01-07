import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialEntregadoRecGar {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 20,
  })
  idRboGarRec: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoGarRec: string;

  @Column('varchar', {
    length: 36,
  })
  serialGarRec: string;

  @Column('int', {
    width: 11,
  })
  estadoSerial: number;
}
