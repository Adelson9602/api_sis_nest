import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaItem {
  @PrimaryGeneratedColumn('increment')
  idCategoria: number;

  @Column('varchar', {
    length: 250,
  })
  categoria: string;

  @Column('int', {
    width: 2,
  })
  opcion: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('timestamp')
  fechaControl: Date;
}
