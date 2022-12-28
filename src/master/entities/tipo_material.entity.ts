import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoMaterial {
  @PrimaryGeneratedColumn('increment')
  idTipoMaterial: number;

  @Column('varchar', {
    length: 150,
  })
  tipoMaterial: string;

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
