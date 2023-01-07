import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class SerialEntradaGarantia {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 6,
  })
  idEncTrasGarantia: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoSer: string;

  @Column('int', {
    width: 2,
  })
  idLoteSer: number;

  @Column('varchar', {
    length: 3,
  })
  idCodFallaSer: string;

  @Column('varchar', {
    length: 36,
  })
  serialGar: string;
}
