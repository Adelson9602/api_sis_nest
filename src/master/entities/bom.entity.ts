import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Bom {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    comment: 'Concatenado de ID_Proyecto y ID_Producto',
    length: 50,
  })
  idBom: string;

  @Column('int', {
    width: 4,
  })
  idProyecto: number;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadBom: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantidadBomAdi: number;

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
  fechaHora: Date;
}
