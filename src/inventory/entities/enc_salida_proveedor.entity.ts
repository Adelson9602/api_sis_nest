import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncSalidaProveedor {
  @PrimaryGeneratedColumn('increment')
  idEncSalidaProv: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 11,
    comment: 'Cedula de quien autoriza',
  })
  cedulaAutoriza: number;

  @Column('varchar', {
    length: 64,
    comment: 'Nombre de quien autoriza pro parte del cliente',
  })
  autorizaCliente: string;

  @Column('varchar', {
    length: 18,
  })
  idProveedor: string;

  @Column('varchar', {
    length: 64,
  })
  nombreRecibe: string;

  @Column('varchar', {
    length: 500,
  })
  observacion: string;

  @Column('int', {
    width: 1,
    default: 1,
    comment: '1: sale de bodega libre utilizacion, 2: bodega desmonte',
  })
  tipoSalida: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
