import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncConsumo {
  @PrimaryGeneratedColumn()
  idEncConsumos: number;

  @Column('varchar', {
    length: 1000,
  })
  observacion: string;

  @Column('date', {
    comment: 'Fecha de trabajo',
  })
  fechaReportada: Date;

  @Column('varchar', {
    length: 50,
  })
  primaria: string;

  @Column('varchar', {
    length: 64,
  })
  otaOim: number;

  @Column('varchar', {
    length: 128,
  })
  interventor: number;

  @Column('bigint', {
    width: 12,
    comment: 'Cedula de integrante Movil',
  })
  idUsuarioMovil: number;

  @Column('bigint', {
    width: 12,
    comment: 'Cedula Auxiliar, solo movil operaciones',
  })
  idAuxiliar: number;

  @Column('int', {
    width: 2,
    default: 0,
  })
  idBodega: number;

  @Column('int', {
    width: 4,
  })
  idProyecto: number;

  @Column('int', {
    width: 1,
    comment: '0: Ppendiente, 1: Pagado, 2: Calidad no pagado',
    default: 0,
  })
  validacionPago: number;

  @Column('bigint', {
    width: 12,
    comment:
      'por defecto va cero hasta que se suba la validacion del pago del del consumo a bonificacion',
    default: 0,
  })
  usuarioValidacion: number;

  @Column('timestamp')
  fechaValidacion: Date;

  @Column('timestamp')
  fechaCotrol: Date;
}
