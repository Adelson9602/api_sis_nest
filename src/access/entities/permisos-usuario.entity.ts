import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PermisosUsuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: number;

  @Column('json')
  permisos: string;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  idUsuarioControl: number;

  @Column('timestamp')
  fechaHora: Date;
}
