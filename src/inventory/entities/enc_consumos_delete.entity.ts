import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncConsumosDelete {
  @PrimaryGeneratedColumn('increment')
  idEncConsumos: number;

  @Column('varchar', {
    length: 1000,
  })
  observacion: string;

  @Column('date', {
    comment: 'Fecha de Trabajo',
  })
  fechaReportada: Date;

  @Column('varchar', {
    length: 50,
  })
  primaria: string;

  @Column('varchar', {
    length: 64,
  })
  otaOim: string;

  @Column('varchar', {
    length: 128,
  })
  interventor: string;

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
  })
  idBodega: number;

  @Column('int', {
    width: 4,
    default: 0,
  })
  idProyecto: number;

  @Column('varchar', {
    length: 250,
  })
  observacionDelete: string;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
