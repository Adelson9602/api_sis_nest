import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ModulosFronted {
  @PrimaryGeneratedColumn('increment')
  idModulosFronted: number;

  @Column('varchar', {
    length: 100,
  })
  label: string;

  @Column('varchar', {
    length: 500,
  })
  description: string;

  @Column('varchar', {
    length: 100,
  })
  icon: string;

  @Column('tinyint', {
    width: 1,
  })
  expanded: number;

  @Column('tinyint', {
    width: 1,
  })
  activeItem: number;

  @Column('varchar', {
    length: 100,
  })
  route: string;
}
