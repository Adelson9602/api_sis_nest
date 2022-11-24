import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PermisosUsuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  usuario: number;

  @Column('json')
  permisos: string;

  @Column('bigint', {
    width: 12,
    comment: 'Datos de control',
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaHora: Date;
}
