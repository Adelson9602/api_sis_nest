import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncChequoAlturas {
  @PrimaryGeneratedColumn('increment')
  idEncChequeo: number;

  @Column('int', {
    width: 11,
  })
  area: string;

  @Column('int', {
    width: 11,
  })
  idBodega: string;

  @Column('bigint', {
    width: 12,
  })
  ccTecnico: string;

  @Column('varchar', {
    length: 300,
  })
  accesoPor: string;

  @Column('varchar', {
    length: 500,
  })
  descripcionTrabajo: string;

  @Column('varchar', {
    length: 500,
  })
  observacionEncontrada: string;

  @Column('datetime')
  fechaRealizada: Date;

  @Column('datetime')
  horaInicio: Date;

  @Column('datetime')
  horaFin: Date;

  @Column('varchar', {
    length: 50,
  })
  idPrimaria: string;

  @Column('int', {
    width: 11,
  })
  idMovil: number;

  @Column('varchar', {
    length: 250,
  })
  direccionChequeo: string;

  @Column('varchar', {
    length: 250,
  })
  nombreContactoChqueo: string;

  @Column('varchar', {
    length: 50,
  })
  telefonoChequeo: string;

  @Column('varchar', {
    length: 25,
  })
  placaMovil: string;
}
