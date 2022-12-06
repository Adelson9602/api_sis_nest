import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class FormatosEspeciales {
  @PrimaryGeneratedColumn('increment')
  idFormatosEspeciales: number;

  @Column('varchar', {
    length: 25,
  })
  nombre: string;

  @Column('varchar', {
    length: 200,
  })
  descripcion: string;

  @Column('tinyint', {
    width: 1,
    comment: '1: Activo, 0: Inactivo',
  })
  estado: string;
}
