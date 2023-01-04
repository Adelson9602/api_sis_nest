import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncOrdenCompra {
  @PrimaryGeneratedColumn('increment')
  idEncOrdenCompra: number;

  @Column('datetime')
  fechaHoraOc: Date;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('varchar', {
    length: 18,
  })
  idProveedor: string;

  @Column('varchar', {
    comment: 'Condiciones Comerciales',
    length: 128,
  })
  condicionesComercial: string;

  @Column('varchar', {
    comment: 'Condiciones Comerciales',
    length: 128,
  })
  sitioEntrega: string;

  @Column('varchar', {
    comment: 'Condiciones Comerciales',
    length: 256,
    nullable: true,
  })
  observaciones: string;

  @Column('tinyint', {
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
