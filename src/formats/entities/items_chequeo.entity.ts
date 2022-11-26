import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ItemsChequeo {
  @PrimaryGeneratedColumn('increment')
  idItem: number;

  @Column('varchar', {
    length: 500,
  })
  descripcion: string;

  @Column('int', {
    width: 3,
  })
  idCategoria: string;

  @Column('tinyint', {
    width: 1,
    comment: '1: Activo, 0: Inactivo',
  })
  estado: string;

  @Column('bigint', {
    width: 12,
  })
  usuario: string;

  @Column('timestamp')
  fechaControl: Date;
}
