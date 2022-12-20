import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Homologos {
  @PrimaryGeneratedColumn()
  idHomologo: number;

  @Column('varchar', {
    length: 48,
  })
  nombreGrupo: string;

  @Column('varchar', {
    length: 15,
  })
  idProducto: string;

  @Column('int', {
    width: 2,
  })
  prioridad: number;

  @Column('int', {
    width: 1,
    comment: '0: Inactivo, 1: Activo',
  })
  estado: number;

  @Column('bigint', {
    width: 12,
  })
  idUsuario: number;

  @Column('timestamp')
  fechaControl: Date;
}
