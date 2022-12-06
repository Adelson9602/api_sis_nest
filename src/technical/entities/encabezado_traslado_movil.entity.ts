import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncabezadoTrasladoMovil {
  @PrimaryGeneratedColumn('increment')
  idTrasladoMovil: number;

  @Column('int', {
    width: 2,
  })
  idBodega6: number;

  @Column('int', {
    width: 5,
  })
  idMovilEntrega: number;

  @Column('int', {
    width: 4,
  })
  idProyectoEntrega: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioEntrega: number;

  @Column('int', {
    width: 5,
  })
  idMovilRecibe: number;

  @Column('int', {
    width: 4,
  })
  idProyectoRecibe: number;

  @Column('bigint', {
    width: 12,
    nullable: true,
  })
  usuarioRecibe: number;

  @Column('varchar', {
    length: 300,
    nullable: true,
  })
  observaciones: string;

  @Column('int', {
    width: 1,
    comment: '1: Aprobado, 0: Pendiente',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
    nullable: true,
  })
  cedulaAprobado: number;

  @Column('timestamp')
  fechaControl: Date;
}
