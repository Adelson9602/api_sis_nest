import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class EncEntradaDesmonte {
  @PrimaryGeneratedColumn('increment')
  idEncDesmonte: number;

  @Column('int', {
    width: 20,
    comment: 'Id movil que entrega el material',
  })
  idMovil: number;

  @Column('bigint', {
    width: 15,
  })
  integranteMovil: number;

  @Column('varchar', {
    length: 1000,
  })
  obsDesmonte: string;

  @Column('int', {
    width: 2,
  })
  idBodegaDes: number;

  @Column('bigint', {
    width: 12,
  })
  usuarioControl: number;

  @Column('timestamp')
  fechaControl: Date;
}
