import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetInventarios {
  @PrimaryGeneratedColumn('increment')
  idDetInventarios: number;

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
  idLote: number;

  @Column('int', {
    width: 2,
  })
  idTipoReserva: number;

  @Column('int', {
    width: 11,
    comment:
      'Cantidad que tiene en sistema en el momento de realizar el inventario físico',
  })
  cantSist: number;

  @Column('int', {
    width: 11,
    comment: 'Cantidad real del inventario en el momento',
  })
  cantInv: number;

  @Column('int', {
    width: 11,
    comment: 'Cantidad que devuelve a bodega por ajuste de stock',
  })
  cantDev: number;

  @Column('int', {
    width: 11,
    comment: 'Cantidad que recibe de bodega por ajuste de stock',
  })
  cantRecibe: number;

  @Column('varchar', {
    length: 150,
  })
  observacion: string;
}
