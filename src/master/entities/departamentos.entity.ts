import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Departamentos {
  @PrimaryGeneratedColumn('increment')
  idDepartamento: number;

  @Column('varchar', {
    length: 20,
  })
  departamento: string;

  @Column('int', {
    width: 3,
  })
  idPais: number;
}
