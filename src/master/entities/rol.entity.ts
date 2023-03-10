import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuario } from '../../access/usuario/entities/usuario.entity';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn('increment')
  @OneToMany(() => Usuario, (usuario) => usuario.rol)
  id: number;

  @Column('varchar', {
    length: 64,
  })
  rol: string;

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
