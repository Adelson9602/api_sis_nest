import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncInventarios {
  @PrimaryGeneratedColumn('increment')
  idEncInventario: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 5,
    default: 0,
    comment:
      'id de la movil que se hace inventarios o 0 si el inventario es en bodega.',
  })
  idMovil: number;

  @Column('bigint', {
    width: 12,
    comment:
      'firma de quien esta como representante de la movil para el inventario',
  })
  idUsuarioMovil: number;

  @Column('bigint', {
    width: 12,
    default: 0,
    comment: 'firma de validacion de quien realiza el inventario',
  })
  idUsuarioInventario: number;

  @Column('bigint', {
    width: 12,
    default: 0,
    comment:
      'firma de validacion de quien entrega o recibe material de la movil en el inventario',
  })
  idUsuarioBodega: number;

  @Column('varchar', {
    length: 300,
  })
  observaciones: string;

  @Column('tinyint', {
    width: 1,
    comment:
      'permanecera en 0 hasta que confirme las 3 firmas de validacion luego alli pasar a a1',
  })
  estadoInventario: number;

  @Column('tinyint', {
    width: 1,
    comment:
      'dicho estado permanecera en 0 hasta que se concilie todos los materiales entregados sea justificado o descontado',
  })
  estadoConciliacion: number;

  @Column('bigint', {
    width: 12,
    comment: 'id del ultimo que realizo el movimiento de actualizacion',
  })
  usuarioControl: number;

  @Column('timestamp', {
    comment:
      'fecha inamovible de inventario se crea y jamas se debe actualizar',
  })
  fechaInventario: Date;

  // @Column('timestamp')
  // fechaControl: Date;
}
