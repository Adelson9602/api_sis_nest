import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Promedio {
  @PrimaryGeneratedColumn('increment')
  idPromedio: number;

  @Column('int', {
    width: 2,
  })
  idCiudad: number;

  @Column('date')
  fechaPromedio: Date;

  @Column('int', {
    width: 3,
  })
  idGrupoTrabajo: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
    comment: 'Cantidad Promedio',
  })
  promedio: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
    comment:
      'cantidad maxima que puede reportar el tecnico en consumo acorde al grupo de actividades',
  })
  cantMax: number;

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
