import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ChequeoValidacionAprobacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', {
    width: 11,
    primary: true,
  })
  idEncabezado: number;

  @Column('bigint', {
    width: 12,
  })
  ccCoordinador: number;

  @Column('tinyint', {
    width: 1,
    comment: '1: Aprobo, 2: No aprobo',
  })
  aprobacion: number;

  @Column('varchar', {
    length: 500,
  })
  observaciones: string;

  @Column('timestamp')
  fechaControl: Date;
}
