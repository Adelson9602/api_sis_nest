import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VisitaInterna {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('timestamp')
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

  @Column('int', {
    width: 2,
  })
  actividad: number;

  @Column('varchar', {
    length: 64,
  })
  ot: string;

  @Column('varchar', {
    length: 20,
    comment: 'PENDIENTE, PROCESO, COMPLETADO, RAZONADO',
  })
  estado: string;

  @Column('int', {
    width: 4,
  })
  idMunicipio: number;

  @Column('varchar', {
    length: 10,
  })
  nodo: string;

  @Column('varchar', {
    length: 64,
  })
  numeroCuenta: string;

  @Column('varchar', {
    length: 1000,
  })
  razon: string;

  @Column('varchar', {
    length: 30,
  })
  market: string;

  @Column('int', {
    width: 5,
  })
  idMovil: number;

  @Column('int', {
    width: 4,
    nullable: true,
  })
  idProyecto: number;

  @Column('varchar', {
    length: 50,
    comment:
      'Va el numero de ot y antepone una "M"=arreglos, "T"=otros servicios, "PP"=Proyecto diferente a mantenimiento "PM"=proyecto que es mantenimiento',
  })
  primaria: string;

  @Column('bigint', {
    width: 12,
    default: 0,
  })
  creadoPor: number;

  @Column('bigint', {
    width: 12,
  })
  actualizadoPor: number;

  @Column('tinyint', {
    width: 1,
  })
  facturaClaro: string;

  @Column('tinyint', {
    width: 1,
    comment: '1-Masivo, 2-Unico General, 3- Unico Tecnico 4-Automatico QRY',
  })
  opcion: number;

  @Column('tinyint', {
    width: 1,
    default: 0,
  })
  factEditadaTec: number;

  @Column('varchar', {
    length: 20,
    default: '0',
  })
  iniciaVisita: string;

  @Column('datetime', {
    nullable: true,
  })
  horaVisita: Date;

  @Column('varchar', {
    length: 20,
    default: '0',
  })
  iniciaChequeo: string;

  @Column('datetime', {
    nullable: true,
  })
  terminaChequeo: Date;

  @Column('varchar', {
    length: 20,
    default: '0',
  })
  iniciaMat: string;
}
