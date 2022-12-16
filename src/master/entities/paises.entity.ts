import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Paises {
  @PrimaryGeneratedColumn('increment')
  idPais: number;

  @Column('varchar', {
    length: 48,
  })
  pais: string;
}
