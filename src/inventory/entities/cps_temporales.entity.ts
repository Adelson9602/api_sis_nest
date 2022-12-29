import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CpsTemporales {
  @PrimaryGeneratedColumn('increment')
  idCpsTemporales: number;

  @Column('varchar', {
    length: 50,
  })
  serial: string;

  @Column('varchar', {
    length: 20,
  })
  nodo: string;

  @Column('date')
  fecha: Date;

  @Column('varchar', {
    length: 50,
  })
  cuenta: string;

  @Column('text')
  ot: string;

  @Column('varchar', {
    length: 15,
  })
  codigo: string;

  @Column('varchar', {
    length: 50,
  })
  familia: string;
}
