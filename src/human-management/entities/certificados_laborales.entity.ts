import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class CertificadosLaborales {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('bigint', {
    width: 12,
  })
  usarioSolicita: number;

  @Column('varchar', {
    length: 120,
  })
  codigoValidacion: string;

  @Column('int', {
    width: 2,
  })
  idBodega: number;

  @Column('datetime')
  fechaSolicita: Date;

  @Column('bigint', {
    width: 12,
  })
  usuarioRealiza: number;

  @Column('int', {
    width: 3,
  })
  cargo: number;

  @Column('int', {
    width: 2,
  })
  tipoContrato: number;

  @Column('float')
  salarioBasico: number;

  @Column('float')
  otrosp: number;

  @Column('date')
  fechaingreso: Date;

  @Column('date')
  actuBase: Date;
}
