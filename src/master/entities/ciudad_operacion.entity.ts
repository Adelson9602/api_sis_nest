import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CiudadOperacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('int', {
    width: 4,
  })
  idMunicipio: number;

  @Column('tinyint', {
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
