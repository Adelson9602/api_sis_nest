import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Movil {
  @PrimaryGeneratedColumn('increment')
  idMovile: number;

  @Column('int', {
    width: 2,
  })
  idCiudad: number;

  @Column('int', {
    width: 3,
  })
  idTipoStock: number;

  @Column('int', {
    width: 2,
  })
  idTipoMovil: number;

  @Column('varchar', {
    length: 128,
  })
  nombreMovil: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: No, 1: Si',
  })
  promedio: number;

  @Column('tinyint', {
    width: 1,
    comment: '0: No, 1: Si',
  })
  bonificacion: number;

  @Column('datetime', {
    comment: 'Fecha ultimo movimientos inventarios',
  })
  fechaUltMoviInv;

  @Column('datetime')
  fechaInventarioFisico;
  @Column('tinyint', {
    width: 1,
    comment: '0: No, 1: Si',
  })
  proyectos;
  @Column('int', {
    comment: '0: Inactivo, 1: Activo, 2: Conciliación',
    width: 1,
  })
  estado;
}
