import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class GrupoTrabajo {
  @PrimaryGeneratedColumn('increment')
  idGrupoTrabajo: number;

  @Column('varchar', {
    length: 128,
  })
  grupoTrabajo: string;

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
