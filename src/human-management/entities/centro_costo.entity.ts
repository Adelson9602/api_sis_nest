import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CentroCosto {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 9,
  })
  idCentroCostos: string;

  @Column('varchar', {
    length: 24,
  })
  proyecto: string;

  @Column('varchar', {
    length: 36,
  })
  subproyecto: string;

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
