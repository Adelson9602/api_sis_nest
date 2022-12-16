import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoDocumento {
  @PrimaryGeneratedColumn('increment')
  idTipoDocumento: number;

  @Column('varchar', {
    length: 150,
  })
  tipoDocumento: number;

  @Column('varchar', {
    length: 5,
  })
  abreviatura: string;

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
