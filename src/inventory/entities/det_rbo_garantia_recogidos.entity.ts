import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DetRboGarantiaRecogidos {
  @PrimaryGeneratedColumn('increment')
  idDetRboGarRec: number;

  @Column('varchar', {
    length: 15,
  })
  idProductoDes: string;

  @Column('float', {
    precision: 20,
    scale: 2,
    default: 0.0,
  })
  cantEntregada: number;

  @Column('int', {
    width: 1,
  })
  estadoEntrega: number;
}
