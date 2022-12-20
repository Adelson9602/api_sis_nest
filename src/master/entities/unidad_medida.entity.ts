import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UnidadMedida {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 2,
  })
  idUnidad: number;

  @Column('varchar', {
    length: 24,
  })
  unidad: string;

  @Column('varchar', {
    length: 64,
  })
  desUnidad: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
