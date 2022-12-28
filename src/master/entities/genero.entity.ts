import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Genero {
  @PrimaryGeneratedColumn('increment')
  idGenero: number;

  @Column('varchar', {
    length: 150,
  })
  genero: string;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
