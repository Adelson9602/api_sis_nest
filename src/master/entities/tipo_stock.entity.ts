import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TipoStock {
  @PrimaryGeneratedColumn('increment')
  idTipoStock: number;

  @Column('varchar', {
    length: 64,
  })
  tipoStock: string;

  @Column('int', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
