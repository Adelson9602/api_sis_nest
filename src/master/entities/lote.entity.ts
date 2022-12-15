import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Lote {
  @PrimaryGeneratedColumn('increment')
  idLote: number;

  @Column('varchar', {
    length: 24,
  })
  lote: string;

  @Column('int', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
    comment: '0: Inactivo, 1: Activo',
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
