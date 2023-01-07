import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class RolloInventarios {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 11,
  })
  idInventario: number;

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
    default: 0,
  })
  abscisaInicial: number;

  @Column('int', {
    width: 4,
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
}
