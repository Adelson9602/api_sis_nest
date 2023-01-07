import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class VisitasRazon {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('datetime')
  fecha: Date;

  @Column('varchar', {
    length: 20,
  })
  franja: string;

  @Column('varchar', {
    length: 250,
  })
  direccion: string;

  @Column('varchar', {
    length: 100,
  })
  nombreCompleto: string;

  @Column('varchar', {
    length: 50,
  })
  actividad: string;

  @Column('varchar', {
    length: 64,
  })
  ot: string;

  @Column('varchar', {
    length: 20,
  })
  estado: string;

  @Column('int', {
    width: 4,
  })
  idMunicipio6: number;

  @Column('varchar', {
    length: 10,
  })
  nodo: string;

  @Column('varchar', {
    length: 64,
  })
  numeroCuenta: string;

  @Column('varchar', {
    length: 30,
  })
  market: string;

  @Column('varchar', {
    length: 1000,
  })
  observacion: string;

  @Column('varchar', {
    length: 3,
  })
  codRazon: string;

  @Column('int', {
    width: 20,
  })
  externalId: number;

  @Column('varchar', {
    length: 50,
  })
  primaria: string;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 4,
  })
  idProyecto: number;
}
