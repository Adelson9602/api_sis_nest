import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloInstalar {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 30,
    comment: 'concatenado de Rollo, consecutivo rollo, bodega',
  })
  idRolloInstalar: string;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 2,
  })
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('int', {
    width: 3,
  })
  consecutivoRollo: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidad: number;

  @Column('varchar', {
    length: 24,
  })
  rollo: string;

  @Column('int', {
    width: 4,
  })
  abscisaInicial: number;

  @Column('int', {
    width: 4,
    default: 0,
  })
  abscisaFinal: number;

  @Column('varchar', {
    length: 10,
    default: 'NA',
  })
  loteFabricante: string;

  @Column('int', {
    width: 5,
    default: 0,
    comment: '0 si no está asignado',
  })
  idMovil: number;

  @Column('int', {
    width: 4,
    default: 0,
    comment: '0 si no está asignado',
  })
  idProyecto: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
