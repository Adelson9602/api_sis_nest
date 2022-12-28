import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Municipio {
  @PrimaryGeneratedColumn('increment')
  idMunicipio: number;

  @Column('varchar', {
    length: 30,
  })
  municipio: string;

  @Column('int', {
    width: 2,
  })
  idDepartamento: number;
}
