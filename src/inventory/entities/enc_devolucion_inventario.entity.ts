import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncDevolucionInventario {
  @PrimaryGeneratedColumn('increment')
  idDevInventario: number;

  @Column('int', {
    width: 11,
  })
  cedulaAutoriza: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaDevuelve: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaUsuario: number;

  @Column('varchar', {
    length: 500,
  })
  observacion: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 4,
  })
  idProyecto: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
