import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ciudad {
  @PrimaryGeneratedColumn('increment')
  idCiudad: number;

  @Column('int', {
    width: 2,
  })
  idRegional: number;

  @Column('int', {
    width: 4,
  })
  idMunicipio: number;

  @Column('int', {
    width: 4,
  })
  areaPromedios: number;

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
