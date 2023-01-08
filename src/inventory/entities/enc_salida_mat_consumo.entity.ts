import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncSalidaMatConsumo {
  @PrimaryGeneratedColumn('increment')
  idSalMatConsumo: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaAutoriza: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaRecibe: number;

  @Column('varchar', {
    length: 500,
  })
  observaciones: string;

  @Column('varchar', {
    length: 500,
  })
  soporteFoto: string;

  @Column('int', {
    width: 2,
  })
  idBodega14: number;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 4,
    default: 0,
  })
  idProyecto: number;

  @Column('tinyint', {
    width: 1,
    comment:
      '1: si "aplica cuando recibe de inmediato la persona", 0: no "aplica cuando alista pedido pero aun no ha recibido"',
  })
  entregado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
