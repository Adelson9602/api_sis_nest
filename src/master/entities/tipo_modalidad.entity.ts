import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoModalidad {
  @PrimaryGeneratedColumn('increment')
  idTipoModalidad: number;

  @Column('varchar', {
    length: 150,
  })
  tipoModalidad: string;

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
