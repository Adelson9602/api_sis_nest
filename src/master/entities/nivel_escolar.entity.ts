import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NivelEscolar {
  @PrimaryGeneratedColumn('increment')
  idNivelEscolar: number;

  @Column('varchar', {
    length: 150,
  })
  nivelEscolar: string;

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
