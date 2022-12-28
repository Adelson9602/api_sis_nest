import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoMovil {
  @PrimaryGeneratedColumn('increment')
  idTipoMovil: number;

  @Column('varchar', {
    length: 150,
  })
  tipoMovil: string;

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
