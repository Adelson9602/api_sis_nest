import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoTenencia {
  @PrimaryGeneratedColumn('increment')
  idTipoTenencia: number;

  @Column('varchar', {
    length: 150,
  })
  tipoTenencia: string;

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
