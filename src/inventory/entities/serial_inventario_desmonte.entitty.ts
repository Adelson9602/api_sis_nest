import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialInventarioDesmonte {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('varchar', {
    length: 36,
  })
  serial: string;

  @Column('int', {
    width: 11,
  })
  disposicion: number;
}
