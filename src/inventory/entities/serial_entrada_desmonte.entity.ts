import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialEntradaDesmonte {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 6,
  })
  idEncEntDesmSEr: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoDesmSer: string;

  @Column('int', {
    width: 2,
  })
  idLoteDesmSer: number;

  @Column('varchar', {
    length: 3,
  })
  idCodFallaSer: string;

  @Column('varchar', {
    length: 36,
  })
  serialDesm: string;
}
