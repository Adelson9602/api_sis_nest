import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PermisosBasicos {
  @PrimaryGeneratedColumn()
  idPermisosBasicos: number;

  @Column('int', {
    width: 11,
  })
  idRol: number;

  @Column('int', {
    width: 11,
  })
  idModulo: number;

  @Column('tinyint', {
    width: 1,
  })
  leer: number;

  @Column('tinyint', {
    width: 1,
  })
  crear: number;

  @Column('tinyint', {
    width: 1,
  })
  actualizar: number;

  @Column('tinyint', {
    width: 1,
  })
  borrar: number;

  @Column('tinyint', {
    width: 1,
  })
  estado: number;
}
