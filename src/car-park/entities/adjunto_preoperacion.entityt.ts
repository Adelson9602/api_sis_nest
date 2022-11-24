import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AdjuntosPreoperacional {
  @PrimaryGeneratedColumn('increment')
  idAdjunto: number;

  @Column('varchar', {
    length: 500,
  })
  rutaFoto: string;

  @Column('varchar', {
    length: 500,
  })
  observacion: string;

  @Column('int', {
    width: 11,
  })
  idDetalle: number;

  @Column('tinyint', {
    width: 1,
    comment: '1: solucionado, 0: sin solucionar',
  })
  estadoSolucion: number;

  @Column('varchar', {
    length: 5000,
    nullable: true,
  })
  notasSolucion: string;

  @Column('date', {
    nullable: true,
  })
  fechaSolucion: Date;

  @Column('bigint', {
    width: 12,
    nullable: true,
  })
  usuarioSoluciono: number;

  @Column('tinyint', {
    width: 1,
    comment: '1: preoperacional, 2: chequeo alturas',
  })
  tipoInspeccion: number;
}
