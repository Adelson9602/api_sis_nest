import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EstadoCivil {
  @PrimaryGeneratedColumn('increment')
  idEstadoCivil: number;

  @Column('varchar', {
    length: 150,
  })
  estadoCivil: string;

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
