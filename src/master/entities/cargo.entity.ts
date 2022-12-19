import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Cargo {
  @PrimaryGeneratedColumn('increment')
  idCargo: number;

  @Column('varchar', {
    length: 64,
  })
  cargo: string;

  @Column('varchar', {
    length: 9,
  })
  idCentroCostos: string;

  @Column('tinyint', {
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
