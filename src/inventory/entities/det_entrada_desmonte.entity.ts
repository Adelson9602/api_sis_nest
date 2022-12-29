import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetEntradaDesmonte {
  @PrimaryGeneratedColumn()
  idDetEntradaDesmonte: number;

  @Column('int', {
    width: 20,
  })
  idEncDesmonteDet: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoDes: string;

  @Column('int', {
    width: 2,
  })
  idLoteDes: number;

  @Column('tinyint', {
    width: 1,
    comment: '1: Reutilizar, 0: Obsoleto',
  })
  disposicion: number;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantEntregada: number;

  @Column('varchar', {
    length: 128,
  })
  observacion: string;
}
