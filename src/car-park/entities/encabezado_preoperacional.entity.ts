import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncabezadoPreoperacional {
  @PrimaryGeneratedColumn('increment')
  idEncPreoperacional: number;

  @Column('tinyint', {
    width: 1,
    comment: '0: No tiene, 1: Si tiene',
  })
  tarjetaPropiedad: number;

  @Column('timestamp', {
    comment: 'Fecha en que se realiza el preoperacional',
  })
  fechaPreoperacional: Date;

  @Column('bigint', {
    width: 20,
  })
  kilometraje: number;

  @Column('varchar', {
    length: 500,
  })
  observacionConductor: string;

  @Column('bigint', {
    width: 12,
  })
  ccConductor: number;

  @Column('varchar', {
    length: 6,
  })
  placa: string;

  @Column('int', {
    width: 11,
  })
  idBodega: string;

  @Column('int', {
    width: 11,
  })
  idMovil: string;

  @Column('int', {
    width: 12,
  })
  ccAuditor: string;

  @Column('varchar', {
    length: 500,
    nullable: true,
  })
  observacionAuditor: string;

  @Column('tinyint', {
    width: 1,
    comment: '1: Aprobó, 0: No aprobó',
  })
  estado: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: string;

  @Column('timestamp')
  fechaControl: Date;

  @Column('date')
  fechaSoat: Date;

  @Column('date', {
    nullable: true,
  })
  fechaTecnico: Date;

  @Column('date')
  fechaLicencia: Date;
}
