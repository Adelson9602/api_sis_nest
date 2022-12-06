import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CategoriaOpciones {
  @PrimaryGeneratedColumn('increment')
  idCategoriaOpciones: number;

  @Column('varchar', {
    length: 500,
  })
  descripcion: string;

  @Column('tinyint', {
    width: 1,
    comment: '1: Activo, 0: Inactivo',
  })
  estado: string;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('timestamp')
  fechaControl: Date;
}
