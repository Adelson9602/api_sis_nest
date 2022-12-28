import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductoCiudadSrn {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoSrn: string;

  @Column('int', {
    width: 2,
  })
  idBodega: string;

  @Column('varchar', {
    length: 6,
    comment: 'Serial/Rollo/Nada',
  })
  srn: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  nivelMinimo: number;

  @Column('varchar', {
    length: 12,
  })
  ubicacion: string;

  @Column('tinyint', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: string;

  @Column('timestamp')
  fechaControl: Date;
}
