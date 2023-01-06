import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncSolicitudMat {
  @PrimaryGeneratedColumn('increment')
  idSolicitudMat: number;

  @Column('varchar', {
    length: 18,
  })
  idProveedor: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('varchar', {
    length: 128,
  })
  observaciones: string;

  @Column('tinyint', {
    width: 1,
    comment: 'Guardado / Candado',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
