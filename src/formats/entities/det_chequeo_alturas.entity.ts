import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetChequeoAlturas {
  @PrimaryGeneratedColumn('increment')
  idDetalle: number;

  @Column('int', {
    width: 11,
  })
  idEncChequeo: number;

  @Column('int', {
    width: 11,
  })
  idItem: number;

  @Column('varchar', {
    length: 11,
  })
  respuesta: string;
}
