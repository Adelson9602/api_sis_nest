import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoVivienda {
  @PrimaryGeneratedColumn('increment')
  idTipoVivienda: number;

  @Column('varchar', {
    length: 150,
  })
  tipoVivienda: string;

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
