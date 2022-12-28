import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NotificacionesGeneral {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', {
    length: 100,
  })
  titulo: string;

  @Column('varchar', {
    length: 500,
  })
  descripcion: string;

  @Column('bigint', {
    width: 15,
  })
  usuarioNotificado: number;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;

  @Column('timestamp')
  fechaNotificacion: Date;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
