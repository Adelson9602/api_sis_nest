import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class MovilPersona {
  @PrimaryGeneratedColumn('increment')
  idMovilPersona: number;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('int', {
    width: 11,
    default: 1,
  })
  tecnicoppl: number;

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
