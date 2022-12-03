import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class InformacionVivienda {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('int', {
    width: 9,
  })
  idInfVivienda: number;

  @Column('int', {
    width: 10,
  })
  idDatosPersonales: number;

  @Column('int', {
    width: 4,
  })
  idMunicipio: number;

  @Column('varchar', {
    length: 32,
  })
  localidad: string;

  @Column('varchar', {
    length: 64,
  })
  barrio: string;

  @Column('varchar', {
    length: 100,
  })
  direccion: string;

  @Column('int', {
    width: 1,
  })
  estratoSocioeconomico: number;

  @Column('int', {
    width: 3,
  })
  tipoVivienda: number;

  @Column('int', {
    width: 3,
  })
  tipoTenencia: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaHora: Date;
}
