import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class QuienAutoriza {
  @PrimaryGeneratedColumn('increment')
  iidQuienAutoriza: number;

  @Column('bigint', {
    width: 12,
  })
  cedulaUsuario: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 1,
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
