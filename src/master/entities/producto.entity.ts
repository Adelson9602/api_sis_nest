import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', {
    length: 15,
    comment: 'Código Producto',
  })
  idProducto: string;

  @Column('varchar', {
    length: 256,
  })
  descripcion: string;

  @Column('varchar', {
    length: 5,
  })
  tipoMaterial: string;

  @Column('int', {
    width: 2,
  })
  idUnidad: number;

  @Column('varchar', {
    length: 6,
    comment: 'Serial, Rollo o Nada',
  })
  tipoProducto: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  valorUnitario: number;

  @Column('int', {
    width: 2,
  })
  undEmpaqueCompra: number;

  @Column('int', {
    width: 2,
  })
  undEmpaqueEntrega: number;

  @Column('tinyint', {
    width: 1,
    comment: '0: No, 1: Si',
  })
  indicativoComprado: number;

  @Column('int', {
    width: 3,
  })
  idFamilia: number;

  @Column('int', {
    width: 9,
  })
  idItemCorporativo: number;

  @Column('tinyint', {
    width: 1,
    comment: '0: No, 1: Si',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
