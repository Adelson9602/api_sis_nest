import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncEntradaInventario {
  @PrimaryGeneratedColumn('increment')
  idEncEntradaInv: number;

  @Column('int', {
    width: 6,
    comment: 'Solicitud de material',
  })
  idSolicitudMat: number;

  @Column('varchar', {
    length: 36,
  })
  numComprobante: string;

  @Column('varchar', {
    length: 1000,
  })
  observaciones: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
