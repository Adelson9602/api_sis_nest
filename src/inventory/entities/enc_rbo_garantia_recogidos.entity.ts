import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncRboGarantiaRecogidos {
  @PrimaryGeneratedColumn('increment')
  idEncRboGarRec: number;

  @Column('int', {
    width: 20,
  })
  idMovil: number;

  @Column('bigint', {
    width: 12,
  })
  integranteMovil: number;

  @Column('varchar', {
    length: 1000,
  })
  observacionDesmonte: string;

  @Column('int', {
    width: 2,
  })
  idBodegaDesmonte: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
