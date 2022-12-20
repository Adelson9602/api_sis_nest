import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn('increment')
  idRol: number;

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
